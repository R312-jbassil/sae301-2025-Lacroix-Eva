/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Commande = "Commande",
	Compose = "Compose",
	Enregistre = "Enregistre",
	Lunette = "Lunette",
	Materiau = "Materiau",
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CommandeRecord = {
	created?: IsoDateString
	id: string
	id_lunette?: RecordIdString
	id_utilisateur?: RecordIdString
	updated?: IsoDateString
}

export type ComposeRecord = {
	created?: IsoDateString
	id: string
	id_lunette?: RecordIdString
	id_utilisateur?: RecordIdString
	updated?: IsoDateString
}

export type EnregistreRecord = {
	created?: IsoDateString
	id: string
	id_lunette?: RecordIdString
	id_utilisateur?: RecordIdString
	updated?: IsoDateString
}

export type LunetteRecord = {
	code_svg?: string
	created?: IsoDateString
	id: string
	id_materiau_branche?: RecordIdString
	id_materiau_monture?: RecordIdString
	updated?: IsoDateString
}

export type MateriauRecord = {
	created?: IsoDateString
	id: string
	libelle_materiau?: string
	updated?: IsoDateString
}

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type UsersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	nom?: string
	password: string
	prenom?: string
	tokenKey: string
	updated?: IsoDateString
	username?: string
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type CommandeResponse<Texpand = unknown> = Required<CommandeRecord> & BaseSystemFields<Texpand>
export type ComposeResponse<Texpand = unknown> = Required<ComposeRecord> & BaseSystemFields<Texpand>
export type EnregistreResponse<Texpand = unknown> = Required<EnregistreRecord> & BaseSystemFields<Texpand>
export type LunetteResponse<Texpand = unknown> = Required<LunetteRecord> & BaseSystemFields<Texpand>
export type MateriauResponse<Texpand = unknown> = Required<MateriauRecord> & BaseSystemFields<Texpand>
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Commande: CommandeRecord
	Compose: ComposeRecord
	Enregistre: EnregistreRecord
	Lunette: LunetteRecord
	Materiau: MateriauRecord
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Commande: CommandeResponse
	Compose: ComposeResponse
	Enregistre: EnregistreResponse
	Lunette: LunetteResponse
	Materiau: MateriauResponse
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Commande'): RecordService<CommandeResponse>
	collection(idOrName: 'Compose'): RecordService<ComposeResponse>
	collection(idOrName: 'Enregistre'): RecordService<EnregistreResponse>
	collection(idOrName: 'Lunette'): RecordService<LunetteResponse>
	collection(idOrName: 'Materiau'): RecordService<MateriauResponse>
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
