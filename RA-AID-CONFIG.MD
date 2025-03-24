(venv) victoryavanadis@Mac ra_aid % cat config.py                         
"""Configuration utilities."""

DEFAULT_RECURSION_LIMIT = 100
DEFAULT_MAX_TEST_CMD_RETRIES = 3
DEFAULT_MAX_TOOL_FAILURES = 3
FALLBACK_TOOL_MODEL_LIMIT = 5
RETRY_FALLBACK_COUNT = 3
DEFAULT_TEST_CMD_TIMEOUT = 60 * 5  # 5 minutes in seconds
DEFAULT_MODEL="claude-3-7-sonnet-20250219"
DEFAULT_SHOW_COST = False


VALID_PROVIDERS = [
    "anthropic",
    "openai",
    "openrouter",
    "openai-compatible",
    "deepseek",
    "gemini",
]
(venv) victoryavanadis@Mac ra_aid % 

(venv) victoryavanadis@Mac ra_aid % cat tool_configs.py 
from langchain_core.tools import BaseTool

from ra_aid.tools import (
    ask_expert,
    ask_human,
    emit_expert_context,
    emit_key_facts,
    emit_key_snippet,
    emit_related_files,
    emit_research_notes,
    file_str_replace,
    fuzzy_find_project_files,
    list_directory_tree,
    put_complete_file_contents,
    read_file_tool,
    ripgrep_search,
    run_programming_task,
    run_shell_command,
    task_completed,
    web_search_tavily,
)
from ra_aid.tools.agent import (
    request_implementation,
    request_research,
    request_research_and_implementation,
    request_task_implementation,
    request_web_research,
)
from ra_aid.tools.memory import plan_implementation_completed
from ra_aid.database.repositories.config_repository import get_config_repository


def set_modification_tools(use_aider=False):
    """Set the MODIFICATION_TOOLS list based on configuration.

    Args:
        use_aider: Whether to use run_programming_task (True) or file modification tools (False)
    """
    global MODIFICATION_TOOLS
    if use_aider:
        MODIFICATION_TOOLS.clear()
        MODIFICATION_TOOLS.append(run_programming_task)
    else:
        MODIFICATION_TOOLS.clear()
        MODIFICATION_TOOLS.extend([file_str_replace, put_complete_file_contents])


# Read-only tools that don't modify system state
def get_read_only_tools(
    human_interaction: bool = False,
    web_research_enabled: bool = False,
    use_aider: bool = False,
):
    """Get the list of read-only tools, optionally including human interaction tools.

    Args:
        human_interaction: Whether to include human interaction tools
        web_research_enabled: Whether to include web research tools
        use_aider: Whether aider is being used for code modifications

    Returns:
        List of tool functions
    """
    tools = [
        emit_key_snippet,
        # Only include emit_related_files if use_aider is True
        *([emit_related_files] if use_aider else []),
        emit_key_facts,
        # *TEMPORARILY* disabled to improve tool calling perf.
        # delete_key_facts,
        # delete_key_snippets,
        # deregister_related_files,
        list_directory_tree,
        read_file_tool,
        fuzzy_find_project_files,
        ripgrep_search,
        run_shell_command,  # can modify files, but we still need it for read-only tasks.
    ]

    if web_research_enabled:
        tools.append(request_web_research)

    if human_interaction:
        tools.append(ask_human)

    return tools


def get_all_tools() -> list[BaseTool]:
    """Return a list containing all available tools from different groups."""
    all_tools = []
    all_tools.extend(get_read_only_tools())
    all_tools.extend(MODIFICATION_TOOLS)
    all_tools.extend(EXPERT_TOOLS)
    all_tools.extend(RESEARCH_TOOLS)
    all_tools.extend(get_web_research_tools())
    all_tools.extend(get_chat_tools())
    return all_tools


# Define constant tool groups
# Get config from repository for use_aider value
_config = {}
try:
    _config = get_config_repository().get_all()
except (ImportError, RuntimeError):
    pass

READ_ONLY_TOOLS = get_read_only_tools(use_aider=_config.get("use_aider", False))

# MODIFICATION_TOOLS will be set dynamically based on config, default defined here
MODIFICATION_TOOLS = [file_str_replace, put_complete_file_contents]
COMMON_TOOLS = get_read_only_tools(use_aider=_config.get("use_aider", False))
EXPERT_TOOLS = [emit_expert_context, ask_expert]
RESEARCH_TOOLS = [
    emit_research_notes,
    # *TEMPORARILY* disabled to improve tool calling perf.
    # one_shot_completed,
    # monorepo_detected,
    # ui_detected,
]


def get_research_tools(
    research_only: bool = False,
    expert_enabled: bool = True,
    human_interaction: bool = False,
    web_research_enabled: bool = False,
):
    """Get the list of research tools based on mode and whether expert is enabled.

    Args:
        research_only: Whether to exclude modification tools
        expert_enabled: Whether to include expert tools
        human_interaction: Whether to include human interaction tools
        web_research_enabled: Whether to include web research tools
    """
    # Get config for use_aider value
    use_aider = False
    try:
        use_aider = get_config_repository().get("use_aider", False)
    except (ImportError, RuntimeError):
        pass

    # Start with read-only tools
    tools = get_read_only_tools(
        human_interaction, web_research_enabled, use_aider=use_aider
    ).copy()

    tools.extend(RESEARCH_TOOLS)

    # Add modification tools if not research_only
    if not research_only:
        # For now, we ONLY do modifications after planning.
        # tools.extend(MODIFICATION_TOOLS)
        tools.append(request_implementation)

    # Add expert tools if enabled
    if expert_enabled:
        tools.extend(EXPERT_TOOLS)

    # Add chat-specific tools
    tools.append(request_research)

    return tools


def get_planning_tools(
    expert_enabled: bool = True, web_research_enabled: bool = False
) -> list:
    """Get the list of planning tools based on whether expert is enabled.

    Args:
        expert_enabled: Whether to include expert tools
        web_research_enabled: Whether to include web research tools
    """
    # Get config for use_aider value
    use_aider = False
    try:
        use_aider = get_config_repository().get("use_aider", False)
    except (ImportError, RuntimeError):
        pass

    # Start with read-only tools
    tools = get_read_only_tools(
        web_research_enabled=web_research_enabled, use_aider=use_aider
    ).copy()

    # Add planning-specific tools
    planning_tools = [
        request_task_implementation,
        plan_implementation_completed,
        # *TEMPORARILY* disabled to improve tool calling perf.
        # emit_plan,
    ]
    tools.extend(planning_tools)

    # Add expert tools if enabled
    if expert_enabled:
        tools.extend(EXPERT_TOOLS)

    return tools


def get_implementation_tools(
    expert_enabled: bool = True, web_research_enabled: bool = False
) -> list:
    """Get the list of implementation tools based on whether expert is enabled.

    Args:
        expert_enabled: Whether to include expert tools
        web_research_enabled: Whether to include web research tools
    """
    # Get config for use_aider value
    use_aider = False
    try:
        use_aider = get_config_repository().get("use_aider", False)
    except (ImportError, RuntimeError):
        pass

    # Start with read-only tools
    tools = get_read_only_tools(
        web_research_enabled=web_research_enabled, use_aider=use_aider
    ).copy()

    # Add modification tools since it's not research-only
    tools.extend(MODIFICATION_TOOLS)
    tools.extend([task_completed])

    # Add expert tools if enabled
    if expert_enabled:
        tools.extend(EXPERT_TOOLS)

    return tools


def get_web_research_tools(expert_enabled: bool = True):
    """Get the list of tools available for web research.

    Args:
        expert_enabled: Whether expert tools should be included
        human_interaction: Whether to include human interaction tools
        web_research_enabled: Whether to include web research tools

    Returns:
        list: List of tools configured for web research
    """
    tools = [web_search_tavily, emit_research_notes, task_completed]

    if expert_enabled:
        tools.append(emit_expert_context)
        tools.append(ask_expert)

    return tools


def get_chat_tools(expert_enabled: bool = True, web_research_enabled: bool = False):
    """Get the list of tools available in chat mode.

    Chat mode includes research and implementation capabilities but excludes
    complex planning tools. Human interaction is always enabled.

    Args:
        expert_enabled: Whether to include expert tools
        web_research_enabled: Whether to include web research tools
    """
    tools = [
        ask_human,
        request_research,
        request_research_and_implementation,
        emit_key_facts,
        # *TEMPORARILY* disabled to improve tool calling perf.
        # delete_key_facts,
        # delete_key_snippets,
        # deregister_related_files,
    ]

    if web_research_enabled:
        tools.append(request_web_research)

    return tools%                                                                                                                                                                                                                                    (venv) victoryavanadis@Mac ra_aid % 
	
	(venv) victoryavanadis@Mac ra_aid % cd configs
ls
cd: no such file or directory: configs
__init__.py			agent_utils.py			chat_models			env_inv.py			logging_config.py		project_info.py			tool_configs.py
__main__.py			agents				config.py			env_inv_context.py		migrations			project_state.py		tool_leaderboard.py
__pycache__			agents_alias.py			console				exceptions.py			model_detection.py		prompts				tools
__version__.py			anthropic_message_utils.py	database			fallback_handler.py		model_formatters		provider_strategy.py		utils
agent_backends			anthropic_token_limiter.py	dependencies.py			file_listing.py			models_params.py		tests				version_check.py
agent_context.py		callbacks			env.py				llm.py				proc				text				webui
(venv) victoryavanadis@Mac ra_aid % 


(venv) victoryavanadis@Mac ra_aid % cd configs
ls
cd: no such file or directory: configs
__init__.py			agent_utils.py			chat_models			env_inv.py			logging_config.py		project_info.py			tool_configs.py
__main__.py			agents				config.py			env_inv_context.py		migrations			project_state.py		tool_leaderboard.py
__pycache__			agents_alias.py			console				exceptions.py			model_detection.py		prompts				tools
__version__.py			anthropic_message_utils.py	database			fallback_handler.py		model_formatters		provider_strategy.py		utils
agent_backends			anthropic_token_limiter.py	dependencies.py			file_listing.py			models_params.py		tests				version_check.py
agent_context.py		callbacks			env.py				llm.py				proc				text				webui
(venv) victoryavanadis@Mac ra_aid % cd database/repositories
(venv) victoryavanadis@Mac repositories % ls
__init__.py			config_repository.py		key_fact_repository.py		related_files_repository.py	session_repository.py		work_log_repository.py
__pycache__			human_input_repository.py	key_snippet_repository.py	research_note_repository.py	trajectory_repository.py
(venv) victoryavanadis@Mac repositories % 

(venv) victoryavanadis@Mac repositories % cat config_repository.py
"""Repository for managing configuration values."""

import contextvars
from typing import Any, Dict, Optional

# Create contextvar to hold the ConfigRepository instance
config_repo_var = contextvars.ContextVar("config_repo", default=None)


class ConfigRepository:
    """
    Repository for managing configuration values in memory.
    
    This class provides methods to get, set, update, and retrieve all configuration values.
    It does not require database models and operates entirely in memory.
    """
    
    def __init__(self, initial_config: Optional[Dict[str, Any]] = None):
        """
        Initialize the ConfigRepository.
        
        Args:
            initial_config: Optional dictionary of initial configuration values
        """
        self._config: Dict[str, Any] = {}
        
        # Initialize with default values from config.py
        from ra_aid.config import (
            DEFAULT_RECURSION_LIMIT,
            DEFAULT_MAX_TEST_CMD_RETRIES,
            DEFAULT_MAX_TOOL_FAILURES,
            FALLBACK_TOOL_MODEL_LIMIT,
            RETRY_FALLBACK_COUNT,
            DEFAULT_TEST_CMD_TIMEOUT,
            DEFAULT_SHOW_COST,
            VALID_PROVIDERS,
        )
        
        self._config = {
            "recursion_limit": DEFAULT_RECURSION_LIMIT,
            "max_test_cmd_retries": DEFAULT_MAX_TEST_CMD_RETRIES,
            "max_tool_failures": DEFAULT_MAX_TOOL_FAILURES,
            "fallback_tool_model_limit": FALLBACK_TOOL_MODEL_LIMIT,
            "retry_fallback_count": RETRY_FALLBACK_COUNT,
            "test_cmd_timeout": DEFAULT_TEST_CMD_TIMEOUT,
            "show_cost": DEFAULT_SHOW_COST,
            "valid_providers": VALID_PROVIDERS,
        }
        
        # Update with any provided initial configuration
        if initial_config:
            self._config.update(initial_config)
    
    def get(self, key: str, default: Any = None) -> Any:
        """
        Get a configuration value by key.
        
        Args:
            key: Configuration key to retrieve
            default: Default value to return if key is not found
            
        Returns:
            The configuration value or default if not found
        """
        return self._config.get(key, default)
    
    def set(self, key: str, value: Any) -> None:
        """
        Set a configuration value by key.
        
        Args:
            key: Configuration key to set
            value: Value to set for the key
        """
        self._config[key] = value
    
    def update(self, config_dict: Dict[str, Any]) -> None:
        """
        Update multiple configuration values at once.
        
        Args:
            config_dict: Dictionary of configuration key-value pairs to update
        """
        self._config.update(config_dict)
    
    def get_all(self) -> Dict[str, Any]:
        """
        Get all configuration values.
        
        Returns:
            Dictionary containing all configuration values
        """
        return self._config.copy()


class ConfigRepositoryManager:
    """
    Context manager for ConfigRepository.
    
    This class provides a context manager interface for ConfigRepository,
    using the contextvars approach for thread safety.
    
    Example:
        with ConfigRepositoryManager() as repo:
            # Use the repository
            value = repo.get("key")
            repo.set("key", new_value)
    """
    
    def __init__(self, initial_config: Optional[Dict[str, Any]] = None):
        """
        Initialize the ConfigRepositoryManager.
        
        Args:
            initial_config: Optional dictionary of initial configuration values
        """
        self.initial_config = initial_config
        
    def __enter__(self) -> 'ConfigRepository':
        """
        Initialize the ConfigRepository and return it.
        
        Returns:
            ConfigRepository: The initialized repository
        """
        repo = ConfigRepository(self.initial_config)
        config_repo_var.set(repo)
        return repo
        
    def __exit__(
        self,
        exc_type: Optional[type],
        exc_val: Optional[Exception],
        exc_tb: Optional[object],
    ) -> None:
        """
        Reset the repository when exiting the context.
        
        Args:
            exc_type: The exception type if an exception was raised
            exc_val: The exception value if an exception was raised
            exc_tb: The traceback if an exception was raised
        """
        # Reset the contextvar to None
        config_repo_var.set(None)
        
        # Don't suppress exceptions
        return False


def get_config_repository() -> ConfigRepository:
    """
    Get the current ConfigRepository instance.
    
    Returns:
        ConfigRepository: The current repository instance
        
    Raises:
        RuntimeError: If no repository is set in the current context
    """
    repo = config_repo_var.get()
    if repo is None:
        raise RuntimeError(
            "ConfigRepository not initialized in current context. "
            "Make sure to use ConfigRepositoryManager."
        )
    return repo%                                                                                                                                                                                                                                     (venv) victoryavanadis@Mac repositories % 
