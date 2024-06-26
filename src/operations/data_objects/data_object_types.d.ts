/* Touch */

type DataObjectTouchParams = {
    lpath: string,
    "no-create"?: 0 | 1,
    "replica-number"?: number,
    "leaf-resource"?: string,
    "seconds-since-epoch"?: number,
    "reference"?: string
}

type DataObjectTouchResponse = {
    irods_response: IrodsResponse
}

/* Remove */

type DataObjectRemoveParams = {
    lpath: string,
    "catalog-only": 0 | 1,
    "no-trash": 0 | 1,
    admin?: 0 | 1
}

type DataObjectRemoveResponse = {
    irods_response: IrodsResponse
}

/* Calculate Checksum */

type DataObjectCalculateChecksumParams = {
    lpath: string,
    resource?: string,
    "replica-number"?: number,
    force?: 0 | 1,
    all?: 0 | 1,
    admin?: 0 | 1
}

type DataObjectCalculateChecksumResponse = {
    irods_response: IrodsResponse,
    checksum: string
}

/* Verify Checksum */

type DataObjectVerifyChecksumParams = {
    lpath: string,
    resource?: string,
    "replica-number"?: number,
    "compute-checksums"?: 0 | 1,
    admin?: 0 | 1
}

type DataObjectVerifyChecksumResponse = {
    irods_response: IrodsResponse,
    results?: object,
    r_error_info: [{ status: number, message: string }]
}

/* Stat */

type DataObjectStatParams = {
    lpath: string,
    ticket?: string
}

type DataObjectStatResponse = {
    irods_response: IrodsResponse,
    type: string,
    permissions: [Permission],
    size: number,
    checksum: string,
    registered: boolean,
    modified_at: number
}

/* Rename */

type DataObjectRenameParams = {
    "old-lpath": string,
    "new-lpath": string
}

type DataObjectRenameResponse = {
    irods_response: IrodsResponse
}

/* Copy */

type DataObjectCopyParams = {
    "src-lpath": string,
    "dst-lpath": string,
    "src-resource"?: string
    "dst-resource"?: string,
    overwrite?: 0 | 1
}

type DataObjectCopyResponse = {
    irods_response: IrodsResponse
}

/* Replicate */

type DataObjectReplicateParams = {
    lpath: string,
    "src-resource": string,
    "dst-resource": string,
    admin?: 0 | 1
}

type DataObjectReplicateResponse = {
    irods_response: IrodsResponse
}

/* Trim */

type DataObjectTrimParams = {
    lpath: string,
    "replica-number": number,
    "catalog-only"?: 0 | 1,
    admin?: 0 | 1
}

type DataObjectTrimResponse = {
    irods_response: IrodsResponse
}

/* Register */

type DataObjectRegisterParams = {
    lpath: string,
    ppath: string,
    resource: string,
    "as-additional-replica"?: 0 | 1,
    "data-size"?: number,
    checksum?: string
}

type DataObjectRegisterResponse = {
    irods_response: IrodsResponse
}

/* Read */

type DataObjectReadParams = {
    lpath: string,
    offset?: number,
    count?: number,
    ticket?: string
}

type DataObjectReadResponse = string

/* Write */

type DataObjectWriteParams = {
    lpath: string,
    resource?: string,
    offset?: number,
    truncate?: 0 | 1,
    append?: 0 | 1,
    bytes: Buffer, // You can use Buffer for binary data
    "parallel-write-handle"?: string,
    "stream-index"?: number
}

type DataObjectWriteResponse = {
    irods_response: IrodsResponse
}

/* Parallel Write Init */

type DataObjectParallelWriteInitParams = {
    lpath: string,
    "stream-count": number,
    truncate?: 0 | 1,
    append?: 0 | 1,
    ticket?: string
}

type DataObjectParallelWriteInitResponse = {
    irods_response: IrodsResponse,
    parallel_write_handle: string
}

/* Parallel Write Shutdown */

type DataObjectParallelWriteShutdownParams = {
    "parallel-write-handle": string
}

type DataObjectParallelWriteShutdownResponse = {
    irods_response: IrodsResponse,
}

/* Modify Metadata */

type DataObjectModifyMetadataParams = {
    lpath: string,
    operations: [AVUOperation],
    admin?: 0 | 1
}

type DataObjectModifyMetadataFailure = {
    failed_operation?: {
        operation: AVUOperation
    },
    operation_index?: number,
    status_message?: string
}

type DataObjectModifyMetadataResponse = {
    irods_response: IrodsResponse & DataObjectModifyMetadataFailure,
}

/* Set Permission */

type DataObjectSetPermissionParams = {
    lpath: string,
    "entity-name": string,
    permission: "null" | "read" | "write" | "own",
    admin?: 0 | 1
}

type DataObjectSetPermissionResponse = {
    irods_response: IrodsResponse
}


/* Modify Permissions */

type DataObjectModifyPermissionsParams = {
    lpath: string,
    operations: [ModifyPermissionsOperation],
    admin?: 0 | 1
}

type DataObjectModifyPermissionsFailure = {
    failed_operation?: {
        operation: ModifyPermissionsOperation
    },
    operation_index?: number
    status_message?: string
}

type DataObjectModifyPermissionsResponse = {
    irods_response: IrodsResponse & DataObjectModifyPermissionsFailure
}

/* Modify Replica */

// Separate resource hierarchy and replica number, make them mutually exclusive fields

type ResourceHierarchyType = {
    "resource-hierarchy": string
}

type ReplicaNumberType = {
    "replica-number": number
}

type DataObjectModifyReplicaOptionalParams = {
    'new-data-checksum'?: string;
    'new-data-comments'?: string;
    'new-data-create-time'?: number;
    'new-data-expiry'?: number;
    'new-data-mode'?: string;
    'new-data-modify-time'?: string;
    'new-data-path'?: string;
    'new-data-replica-number'?: number;
    'new-data-replica-status'?: number;
    'new-data-resource-id'?: number;
    'new-data-size'?: number;
    'new-data-status'?: string;
    'new-data-type-name'?: string;
    'new-data-version'?: string;
}

type DataObjectModifyReplicaBaseParams = {
    lpath: string;
}

// Ensure mutually exclusive fields of "resource-hierarchy" and "replica-number", and that at least one optional field is filled in
type DataObjectModifyReplicaParams = DataObjectModifyReplicaBaseParams &
    XOR<ResourceHierarchyType, ReplicaNumberType> &
    RequireAtLeastOne<DataObjectModifyReplicaOptionalParams>

type DataObjectModifyReplicaResponse = {
    irods_response: IrodsResponse
}