import type { IrodsResponse } from "./general_types.js"

/* Add */

export type ZoneAddParams = {
    name: string,
    "connection-info"?: string, // must be in format <host>:<port>, can this be enforced in TypeScript?
    comment?: string
}

export type ZoneAddResponse = IrodsResponse

/* Remove */

export type ZoneRemoveParams = {
    name: string
}

export type ZoneRemoveResponse = IrodsResponse

/* Modify */

export type ZoneModifyParams = {
    name: string,
    property: string,
    value: string
}

export type ZoneModifyResponse = IrodsResponse

/* Report */

export type CoordinatingResource = {
    comments: string
    context_string: string
    free_space: string
    host: string
    id: string
    info: string
    name: string
    parent_context: string
    parent_resource: string
    status: string
    type: string
    vault_path: string
}

export type HostSystemInformation = {
    hostname: string
    os_distribution_name: string
    os_distribution_version: string
    service_account_group_name: string
    service_account_user_name: string
    uname: string
}

export type Plugin = {
    checksum_sha256: string
    name: string
    type: string
    version: string
}

export type ServerConfig = {
    advanced_settings: {
        agent_factory_watcher_sleep_time_in_seconds: number
        default_number_of_transfer_threads: number
        default_temporary_password_lifetime_in_seconds: number
        delay_rule_executors: [any]
        delay_server_sleep_time_in_seconds: number
        dns_cache: {
            cache_clearer_sleep_time_in_seconds: number
            eviction_age_in_seconds: number
            shared_memory_size_in_bytes: number
        }
        hostname_cache: {
            cache_clearer_sleep_time_in_seconds: number
            eviction_age_in_seconds: number
            shared_memory_size_in_bytes: number
        }
        maximum_size_for_single_buffer_in_megabytes: number
        maximum_size_of_delay_queue_in_bytes: number
        maximum_temporary_password_lifetime_in_seconds: number
        migrate_delay_server_sleep_time_in_seconds: number
        number_of_concurrent_delay_rule_executors: number
        stacktrace_file_processor_sleep_time_in_seconds: number
        transfer_buffer_size_for_parallel_transfer_in_megabytes: number
        transfer_chunk_size_for_parallel_transfer_in_megabytes: number
    }
    catalog_provider_hosts: [string]
    catalog_service_role: string
    client_api_allowlist_policy: string
    controlled_user_connection_list: {
        control_type: string
        users: [any]
    }
    default_dir_mode: string
    default_file_mode: string
    default_hash_scheme: string
    default_resource_name: string
    environment_variables: Record<string, any>
    federation: [any]
    host_access_control: {
        access_entries: [any]
    }
    host_resolution: {
        host_entries: [any]
    }
    log_level: {
        agent: string
        agent_factory: string
        api: string
        authentication: string
        database: string
        delay_server: string
        genquery2: string
        legacy: string
        microservice: string
        network: string
        resource: string
        rule_engine: string
        server: string
        sql: string
    }
    match_hash_policy: string
    negotiation_key: string
    plugin_configuration: {
        authentication: Record<string, any>
        database: {
            postgres: {
                db_host: string
                db_name: string
                db_odbc_driver: string
                db_password: string
                db_port: number
                db_username: string
            }
        }
        network: Record<string, any>
        resource: Record<string, any>
        rule_engines: [
            {
                instance_name: string
                plugin_name: string
                plugin_specific_configuration: {
                    re_data_variable_mapping_set?: [string]
                    re_function_name_mapping_set?: [string]
                    re_rulebase_set?: [string]
                    regexes_for_supported_peps?: [string]
                    amqp_location?: string
                    amqp_topic?: string
                    pep_regex_to_match?: string
                }
                shared_memory_instance?: string
            }
        ]
    }
    rule_engine_namespaces: [string]
    schema_name: string
    schema_validation_base_uri: string
    schema_version: string
    server_control_plane_encryption_algorithm: string
    server_control_plane_encryption_num_hash_rounds: number
    server_control_plane_key: string
    server_control_plane_port: number
    server_control_plane_timeout_milliseconds: number
    server_port_range_end: number
    server_port_range_start: number
    zone_auth_scheme: string
    zone_key: string
    zone_name: string
    zone_port: number
    zone_user: string
}

export type ServiceAccountEnvironment = {
    irods_client_server_negotiation: string
    irods_client_server_policy: string
    irods_connection_pool_refresh_time_in_seconds: number
    irods_cwd: string
    irods_default_hash_scheme: string
    irods_default_number_of_transfer_threads: number
    irods_default_resource: string
    irods_encryption_algorithm: string
    irods_encryption_key_size: number
    irods_encryption_num_hash_rounds: number
    irods_encryption_salt_size: number
    irods_home: string
    irods_host: string
    irods_match_hash_policy: string
    irods_maximum_size_for_single_buffer_in_megabytes: number
    irods_port: number
    irods_server_control_plane_encryption_algorithm: string
    irods_server_control_plane_encryption_num_hash_rounds: number
    irods_server_control_plane_key: string
    irods_server_control_plane_port: number
    irods_transfer_buffer_size_for_parallel_transfer_in_megabytes: number
    irods_user_name: string
    irods_zone_name: string
    schema_name: string
    schema_version: string
}

export type Version = {
    catalog_schema_version: number
    commit_id: string
    installation_time: string
    irods_version: string
    schema_name: string
    schema_version: string
}

export type Server = {
    configuration_directory: {
        files: Record<string, string>
        path: string
    }
    host_system_information: HostSystemInformation
    plugins: [Plugin]
    resources: number
    server_config: ServerConfig
    service_account_environment: ServiceAccountEnvironment
    version: Version
}

export type Zone = {
    coordinating_resources: [CoordinatingResource]
    servers: [Server]
}

export type ZoneReport = {
    schema_version: string
    zones: [Zone]
}

export type ZoneReportResponse = IrodsResponse & {
    zone_report: ZoneReport
}
