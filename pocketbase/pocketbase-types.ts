/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Commande = "Commande",
	Lunette = "Lunette",
	Materiau = "Materiau",
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	LunettesCommandees = "lunettes_commandees",
	LunettesCommandeesParUtilisateur = "lunettes_commandees_par_utilisateur",
	NbLunettesNonCommandees = "nb_lunettes_non_commandees",
	PrixCommandesParUtilisateur = "prix_commandes_par_utilisateur",
	PrixTotalChaussuresCommandees = "prix_total_chaussures_commandees",
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

export type LunetteRecord = {
	chat_history?: string
	code_svg?: string
	created?: IsoDateString
	id: string
	id_materiau_branche?: RecordIdString
	id_materiau_monture?: RecordIdString
	name?: string
	prix?: number
	updated?: IsoDateString
	user?: RecordIdString
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

export type LunettesCommandeesRecord = {
	id: string
}

export type LunettesCommandeesParUtilisateurRecord = {
	chat_history?: string
	code_svg?: string
	id: string
	id_lunette?: RecordIdString
	id_utilisateur?: RecordIdString
}

export type NbLunettesNonCommandeesRecord = {
	id: string
	nb_lunettes_non_commandees?: number
}

export type PrixCommandesParUtilisateurRecord<Tprix_total_chaussures_commandees = unknown> = {
	id: string
	id_utilisateur?: RecordIdString
	prix_total_chaussures_commandees?: null | Tprix_total_chaussures_commandees
}

export type PrixTotalChaussuresCommandeesRecord<Tlunettes_commandees = unknown> = {
	id: string
	lunettes_commandees?: null | Tlunettes_commandees
}

export type UsersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	username?: string
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type CommandeResponse<Texpand = unknown> = Required<CommandeRecord> & BaseSystemFields<Texpand>
export type LunetteResponse<Texpand = unknown> = Required<LunetteRecord> & BaseSystemFields<Texpand>
export type MateriauResponse<Texpand = unknown> = Required<MateriauRecord> & BaseSystemFields<Texpand>
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type LunettesCommandeesResponse<Texpand = unknown> = Required<LunettesCommandeesRecord> & BaseSystemFields<Texpand>
export type LunettesCommandeesParUtilisateurResponse<Texpand = unknown> = Required<LunettesCommandeesParUtilisateurRecord> & BaseSystemFields<Texpand>
export type NbLunettesNonCommandeesResponse<Texpand = unknown> = Required<NbLunettesNonCommandeesRecord> & BaseSystemFields<Texpand>
export type PrixCommandesParUtilisateurResponse<Tprix_total_chaussures_commandees = unknown, Texpand = unknown> = Required<PrixCommandesParUtilisateurRecord<Tprix_total_chaussures_commandees>> & BaseSystemFields<Texpand>
export type PrixTotalChaussuresCommandeesResponse<Tlunettes_commandees = unknown, Texpand = unknown> = Required<PrixTotalChaussuresCommandeesRecord<Tlunettes_commandees>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Commande: CommandeRecord
	Lunette: LunetteRecord
	Materiau: MateriauRecord
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	lunettes_commandees: LunettesCommandeesRecord
	lunettes_commandees_par_utilisateur: LunettesCommandeesParUtilisateurRecord
	nb_lunettes_non_commandees: NbLunettesNonCommandeesRecord
	prix_commandes_par_utilisateur: PrixCommandesParUtilisateurRecord
	prix_total_chaussures_commandees: PrixTotalChaussuresCommandeesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Commande: CommandeResponse
	Lunette: LunetteResponse
	Materiau: MateriauResponse
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	lunettes_commandees: LunettesCommandeesResponse
	lunettes_commandees_par_utilisateur: LunettesCommandeesParUtilisateurResponse
	nb_lunettes_non_commandees: NbLunettesNonCommandeesResponse
	prix_commandes_par_utilisateur: PrixCommandesParUtilisateurResponse
	prix_total_chaussures_commandees: PrixTotalChaussuresCommandeesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Commande'): RecordService<CommandeResponse>
	collection(idOrName: 'Lunette'): RecordService<LunetteResponse>
	collection(idOrName: 'Materiau'): RecordService<MateriauResponse>
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'lunettes_commandees'): RecordService<LunettesCommandeesResponse>
	collection(idOrName: 'lunettes_commandees_par_utilisateur'): RecordService<LunettesCommandeesParUtilisateurResponse>
	collection(idOrName: 'nb_lunettes_non_commandees'): RecordService<NbLunettesNonCommandeesResponse>
	collection(idOrName: 'prix_commandes_par_utilisateur'): RecordService<PrixCommandesParUtilisateurResponse>
	collection(idOrName: 'prix_total_chaussures_commandees'): RecordService<PrixTotalChaussuresCommandeesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
