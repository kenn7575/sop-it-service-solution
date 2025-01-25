// @ts-nocheck

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const BrandsScalarFieldEnumSchema = z.enum(['UUID','name']);

export const BuildingsScalarFieldEnumSchema = z.enum(['UUID','name']);

export const CategoriesScalarFieldEnumSchema = z.enum(['UUID','name']);

export const ItemsScalarFieldEnumSchema = z.enum(['UUID','date_created','date_updated','storage_location_id','product_status_id','product_id','description','barcode_number']);

export const Items_in_loanScalarFieldEnumSchema = z.enum(['UUID','loan_id','item_id','date_created','date_returned','withBag','withLock']);

export const LoansScalarFieldEnumSchema = z.enum(['UUID','date_created','date_updated','date_of_return','location_of_use_id','user_id','helpdesk_personel_id','selfservice_case_id','recipient_type_id','loan_length','mail_sent']);

export const Pickup_locationsScalarFieldEnumSchema = z.enum(['UUID','name']);

export const Product_statusScalarFieldEnumSchema = z.enum(['UUID','name']);

export const ProductsScalarFieldEnumSchema = z.enum(['UUID','name','brand_id','category_id','date_created','date_updated','product_id_prefix','image_name']);

export const Recipient_typeScalarFieldEnumSchema = z.enum(['UUID','name']);

export const Selfservice_caseScalarFieldEnumSchema = z.enum(['UUID','delivery_location_id','pickup_location_id','distribution_date','estimated_time_consumption']);

export const Storage_locationsScalarFieldEnumSchema = z.enum(['UUID','zone_id','kabinet','shelf','idle_since','img_name','date_updated']);

export const UsersScalarFieldEnumSchema = z.enum(['UUID','username','date_created','date_updated']);

export const ZonesScalarFieldEnumSchema = z.enum(['UUID','name','building_id','floor_level']);

export const FeedbackScalarFieldEnumSchema = z.enum(['UUID','title','description','date_created']);

export const Available_products_viewScalarFieldEnumSchema = z.enum(['UUID','Navn','Brand','Stregkode']);

export const Brands_viewScalarFieldEnumSchema = z.enum(['UUID','Navn']);

export const Categories_viewScalarFieldEnumSchema = z.enum(['UUID','Navn']);

export const Items_from_loansScalarFieldEnumSchema = z.enum(['UUID','Oprettet','Produkt','Med_taske','Med_Laas','Stregkode','loan_id','Returneret']);

export const Items_viewScalarFieldEnumSchema = z.enum(['UUID','Navn','Stregkode','Status','Oprettet','Opdateret']);

export const Loans_viewScalarFieldEnumSchema = z.enum(['UUID','Navn','Laaner','Udlaaner','Oprettet','Opdateret','Returneret','Recipent','Laanetid','Returneringsdato']);

export const Loans_view_extendedScalarFieldEnumSchema = z.enum(['UUID','location_of_use_id','selfservice_case_id','loan_length','zone_id','kabinet','shelf','loaner_id','loaner_username','personel_id','personel_username','recipient_type_id','recipient_name']);

export const Products_viewScalarFieldEnumSchema = z.enum(['UUID','Navn','Kategori','Brand','Oprettet','Opdateret']);

export const Users_viewScalarFieldEnumSchema = z.enum(['UUID','Navn','Brugernavn','Oprettet','Opdateret']);

export const Product_status_viewScalarFieldEnumSchema = z.enum(['UUID','Navn']);

export const Items_without_statusScalarFieldEnumSchema = z.enum(['UUID','Navn','Stregkode','Oprettet','Opdateret']);

export const Items_with_statusScalarFieldEnumSchema = z.enum(['UUID','Navn','Stregkode','Status','Oprettet','Opdateret']);

export const Zones_viewScalarFieldEnumSchema = z.enum(['UUID','Navn','Bygning','Etage']);

export const Buildings_viewScalarFieldEnumSchema = z.enum(['UUID','Navn']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BRANDS SCHEMA
/////////////////////////////////////////

export const brandsSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
})

export type brands = z.infer<typeof brandsSchema>

/////////////////////////////////////////
// BUILDINGS SCHEMA
/////////////////////////////////////////

export const buildingsSchema = z.object({
  UUID: z.number().int(),
  name: z.string().nullable(),
})

export type buildings = z.infer<typeof buildingsSchema>

/////////////////////////////////////////
// CATEGORIES SCHEMA
/////////////////////////////////////////

export const categoriesSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
})

export type categories = z.infer<typeof categoriesSchema>

/////////////////////////////////////////
// ITEMS SCHEMA
/////////////////////////////////////////

export const itemsSchema = z.object({
  UUID: z.number().int(),
  date_created: z.coerce.date(),
  date_updated: z.coerce.date().nullable(),
  storage_location_id: z.number().int().nullable(),
  product_status_id: z.number().int().nullable(),
  product_id: z.number().int(),
  description: z.string().nullable(),
  barcode_number: z.number().int().nullable(),
})

export type items = z.infer<typeof itemsSchema>

/////////////////////////////////////////
// ITEMS IN LOAN SCHEMA
/////////////////////////////////////////

export const items_in_loanSchema = z.object({
  UUID: z.number().int(),
  loan_id: z.number().int(),
  item_id: z.number().int(),
  date_created: z.coerce.date(),
  date_returned: z.coerce.date().nullable(),
  withBag: z.boolean(),
  withLock: z.boolean(),
})

export type items_in_loan = z.infer<typeof items_in_loanSchema>

/////////////////////////////////////////
// LOANS SCHEMA
/////////////////////////////////////////

export const loansSchema = z.object({
  UUID: z.number().int(),
  date_created: z.coerce.date(),
  date_updated: z.coerce.date(),
  date_of_return: z.coerce.date().nullable(),
  location_of_use_id: z.number().int().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().nullable(),
  selfservice_case_id: z.number().int().nullable(),
  recipient_type_id: z.number().int().nullable(),
  loan_length: z.number().int().nullable(),
  mail_sent: z.boolean(),
})

export type loans = z.infer<typeof loansSchema>

/////////////////////////////////////////
// PICKUP LOCATIONS SCHEMA
/////////////////////////////////////////

export const pickup_locationsSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
})

export type pickup_locations = z.infer<typeof pickup_locationsSchema>

/////////////////////////////////////////
// PRODUCT STATUS SCHEMA
/////////////////////////////////////////

export const product_statusSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
})

export type product_status = z.infer<typeof product_statusSchema>

/////////////////////////////////////////
// PRODUCTS SCHEMA
/////////////////////////////////////////

export const productsSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
  brand_id: z.number().int(),
  category_id: z.number().int(),
  date_created: z.coerce.date(),
  date_updated: z.coerce.date(),
  product_id_prefix: z.string().nullable(),
  image_name: z.string().nullable(),
})

export type products = z.infer<typeof productsSchema>

/////////////////////////////////////////
// RECIPIENT TYPE SCHEMA
/////////////////////////////////////////

export const recipient_typeSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
})

export type recipient_type = z.infer<typeof recipient_typeSchema>

/////////////////////////////////////////
// SELFSERVICE CASE SCHEMA
/////////////////////////////////////////

export const selfservice_caseSchema = z.object({
  UUID: z.number().int(),
  delivery_location_id: z.number().int().nullable(),
  pickup_location_id: z.number().int().nullable(),
  distribution_date: z.coerce.date(),
  estimated_time_consumption: z.coerce.date().nullable(),
})

export type selfservice_case = z.infer<typeof selfservice_caseSchema>

/////////////////////////////////////////
// STORAGE LOCATIONS SCHEMA
/////////////////////////////////////////

export const storage_locationsSchema = z.object({
  UUID: z.number().int(),
  zone_id: z.number().int(),
  kabinet: z.string().nullable(),
  shelf: z.string().nullable(),
  idle_since: z.coerce.date().nullable(),
  img_name: z.string().nullable(),
  date_updated: z.coerce.date(),
})

export type storage_locations = z.infer<typeof storage_locationsSchema>

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  UUID: z.number().int(),
  username: z.string(),
  date_created: z.coerce.date(),
  date_updated: z.coerce.date(),
})

export type users = z.infer<typeof usersSchema>

/////////////////////////////////////////
// ZONES SCHEMA
/////////////////////////////////////////

export const zonesSchema = z.object({
  UUID: z.number().int(),
  name: z.string(),
  building_id: z.number().int(),
  floor_level: z.number().int(),
})

export type zones = z.infer<typeof zonesSchema>

/////////////////////////////////////////
// FEEDBACK SCHEMA
/////////////////////////////////////////

export const feedbackSchema = z.object({
  UUID: z.number().int(),
  title: z.string(),
  description: z.string(),
  date_created: z.coerce.date(),
})

export type feedback = z.infer<typeof feedbackSchema>

/////////////////////////////////////////
// AVAILABLE PRODUCTS VIEW SCHEMA
/////////////////////////////////////////

export const available_products_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string().nullable(),
  Brand: z.string().nullable(),
  Stregkode: z.string().nullable(),
})

export type available_products_view = z.infer<typeof available_products_viewSchema>

/////////////////////////////////////////
// BRANDS VIEW SCHEMA
/////////////////////////////////////////

export const brands_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
})

export type brands_view = z.infer<typeof brands_viewSchema>

/////////////////////////////////////////
// CATEGORIES VIEW SCHEMA
/////////////////////////////////////////

export const categories_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
})

export type categories_view = z.infer<typeof categories_viewSchema>

/////////////////////////////////////////
// ITEMS FROM LOANS SCHEMA
/////////////////////////////////////////

export const items_from_loansSchema = z.object({
  UUID: z.number().int(),
  Oprettet: z.coerce.date(),
  Produkt: z.string(),
  Med_taske: z.boolean(),
  Med_Laas: z.boolean(),
  Stregkode: z.string().nullable(),
  loan_id: z.number().int(),
  Returneret: z.coerce.date().nullable(),
})

export type items_from_loans = z.infer<typeof items_from_loansSchema>

/////////////////////////////////////////
// ITEMS VIEW SCHEMA
/////////////////////////////////////////

export const items_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string().nullable(),
  Stregkode: z.string().nullable(),
  Status: z.string().nullable(),
  Oprettet: z.coerce.date(),
  Opdateret: z.coerce.date().nullable(),
})

export type items_view = z.infer<typeof items_viewSchema>

/////////////////////////////////////////
// LOANS VIEW SCHEMA
/////////////////////////////////////////

export const loans_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
  Laaner: z.string().nullable(),
  Udlaaner: z.string().nullable(),
  Oprettet: z.coerce.date(),
  Opdateret: z.coerce.date(),
  Returneret: z.coerce.date().nullable(),
  Recipent: z.string().nullable(),
  Laanetid: z.string().nullable(),
  Returneringsdato: z.coerce.date().nullable(),
})

export type loans_view = z.infer<typeof loans_viewSchema>

/////////////////////////////////////////
// LOANS VIEW EXTENDED SCHEMA
/////////////////////////////////////////

export const loans_view_extendedSchema = z.object({
  UUID: z.number().int(),
  location_of_use_id: z.number().int().nullable(),
  selfservice_case_id: z.number().int().nullable(),
  loan_length: z.number().int().nullable(),
  zone_id: z.number().int().nullable(),
  kabinet: z.string().nullable(),
  shelf: z.string().nullable(),
  loaner_id: z.number().int().nullable(),
  loaner_username: z.string().nullable(),
  personel_id: z.number().int().nullable(),
  personel_username: z.string().nullable(),
  recipient_type_id: z.number().int().nullable(),
  recipient_name: z.string().nullable(),
})

export type loans_view_extended = z.infer<typeof loans_view_extendedSchema>

/////////////////////////////////////////
// PRODUCTS VIEW SCHEMA
/////////////////////////////////////////

export const products_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
  Kategori: z.string().nullable(),
  Brand: z.string().nullable(),
  Oprettet: z.coerce.date(),
  Opdateret: z.coerce.date(),
})

export type products_view = z.infer<typeof products_viewSchema>

/////////////////////////////////////////
// USERS VIEW SCHEMA
/////////////////////////////////////////

export const users_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
  Brugernavn: z.string(),
  Oprettet: z.coerce.date(),
  Opdateret: z.coerce.date(),
})

export type users_view = z.infer<typeof users_viewSchema>

/////////////////////////////////////////
// PRODUCT STATUS VIEW SCHEMA
/////////////////////////////////////////

export const product_status_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
})

export type product_status_view = z.infer<typeof product_status_viewSchema>

/////////////////////////////////////////
// ITEMS WITHOUT STATUS SCHEMA
/////////////////////////////////////////

export const items_without_statusSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string().nullable(),
  Stregkode: z.string().nullable(),
  Oprettet: z.coerce.date(),
  Opdateret: z.coerce.date().nullable(),
})

export type items_without_status = z.infer<typeof items_without_statusSchema>

/////////////////////////////////////////
// ITEMS WITH STATUS SCHEMA
/////////////////////////////////////////

export const items_with_statusSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string().nullable(),
  Stregkode: z.string().nullable(),
  Status: z.string(),
  Oprettet: z.coerce.date(),
  Opdateret: z.coerce.date().nullable(),
})

export type items_with_status = z.infer<typeof items_with_statusSchema>

/////////////////////////////////////////
// ZONES VIEW SCHEMA
/////////////////////////////////////////

export const zones_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string(),
  Bygning: z.string().nullable(),
  Etage: z.number().int(),
})

export type zones_view = z.infer<typeof zones_viewSchema>

/////////////////////////////////////////
// BUILDINGS VIEW SCHEMA
/////////////////////////////////////////

export const buildings_viewSchema = z.object({
  UUID: z.number().int(),
  Navn: z.string().nullable(),
})

export type buildings_view = z.infer<typeof buildings_viewSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BRANDS
//------------------------------------------------------

export const brandsIncludeSchema: z.ZodType<Prisma.brandsInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => productsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const brandsArgsSchema: z.ZodType<Prisma.brandsDefaultArgs> = z.object({
  select: z.lazy(() => brandsSelectSchema).optional(),
  include: z.lazy(() => brandsIncludeSchema).optional(),
}).strict();

export const brandsCountOutputTypeArgsSchema: z.ZodType<Prisma.brandsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => brandsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const brandsCountOutputTypeSelectSchema: z.ZodType<Prisma.brandsCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const brandsSelectSchema: z.ZodType<Prisma.brandsSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => productsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BUILDINGS
//------------------------------------------------------

export const buildingsIncludeSchema: z.ZodType<Prisma.buildingsInclude> = z.object({
  zones: z.union([z.boolean(),z.lazy(() => zonesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BuildingsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const buildingsArgsSchema: z.ZodType<Prisma.buildingsDefaultArgs> = z.object({
  select: z.lazy(() => buildingsSelectSchema).optional(),
  include: z.lazy(() => buildingsIncludeSchema).optional(),
}).strict();

export const buildingsCountOutputTypeArgsSchema: z.ZodType<Prisma.buildingsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => buildingsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const buildingsCountOutputTypeSelectSchema: z.ZodType<Prisma.buildingsCountOutputTypeSelect> = z.object({
  zones: z.boolean().optional(),
}).strict();

export const buildingsSelectSchema: z.ZodType<Prisma.buildingsSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  zones: z.union([z.boolean(),z.lazy(() => zonesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BuildingsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CATEGORIES
//------------------------------------------------------

export const categoriesIncludeSchema: z.ZodType<Prisma.categoriesInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => productsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoriesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const categoriesArgsSchema: z.ZodType<Prisma.categoriesDefaultArgs> = z.object({
  select: z.lazy(() => categoriesSelectSchema).optional(),
  include: z.lazy(() => categoriesIncludeSchema).optional(),
}).strict();

export const categoriesCountOutputTypeArgsSchema: z.ZodType<Prisma.categoriesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => categoriesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const categoriesCountOutputTypeSelectSchema: z.ZodType<Prisma.categoriesCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const categoriesSelectSchema: z.ZodType<Prisma.categoriesSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => productsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoriesCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ITEMS
//------------------------------------------------------

export const itemsIncludeSchema: z.ZodType<Prisma.itemsInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => productsArgsSchema)]).optional(),
  product_status: z.union([z.boolean(),z.lazy(() => product_statusArgsSchema)]).optional(),
  storage_locations: z.union([z.boolean(),z.lazy(() => storage_locationsArgsSchema)]).optional(),
  items_in_loan: z.union([z.boolean(),z.lazy(() => items_in_loanFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ItemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const itemsArgsSchema: z.ZodType<Prisma.itemsDefaultArgs> = z.object({
  select: z.lazy(() => itemsSelectSchema).optional(),
  include: z.lazy(() => itemsIncludeSchema).optional(),
}).strict();

export const itemsCountOutputTypeArgsSchema: z.ZodType<Prisma.itemsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => itemsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const itemsCountOutputTypeSelectSchema: z.ZodType<Prisma.itemsCountOutputTypeSelect> = z.object({
  items_in_loan: z.boolean().optional(),
}).strict();

export const itemsSelectSchema: z.ZodType<Prisma.itemsSelect> = z.object({
  UUID: z.boolean().optional(),
  date_created: z.boolean().optional(),
  date_updated: z.boolean().optional(),
  storage_location_id: z.boolean().optional(),
  product_status_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  description: z.boolean().optional(),
  barcode_number: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => productsArgsSchema)]).optional(),
  product_status: z.union([z.boolean(),z.lazy(() => product_statusArgsSchema)]).optional(),
  storage_locations: z.union([z.boolean(),z.lazy(() => storage_locationsArgsSchema)]).optional(),
  items_in_loan: z.union([z.boolean(),z.lazy(() => items_in_loanFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ItemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ITEMS IN LOAN
//------------------------------------------------------

export const items_in_loanIncludeSchema: z.ZodType<Prisma.items_in_loanInclude> = z.object({
  items: z.union([z.boolean(),z.lazy(() => itemsArgsSchema)]).optional(),
  loans: z.union([z.boolean(),z.lazy(() => loansArgsSchema)]).optional(),
}).strict()

export const items_in_loanArgsSchema: z.ZodType<Prisma.items_in_loanDefaultArgs> = z.object({
  select: z.lazy(() => items_in_loanSelectSchema).optional(),
  include: z.lazy(() => items_in_loanIncludeSchema).optional(),
}).strict();

export const items_in_loanSelectSchema: z.ZodType<Prisma.items_in_loanSelect> = z.object({
  UUID: z.boolean().optional(),
  loan_id: z.boolean().optional(),
  item_id: z.boolean().optional(),
  date_created: z.boolean().optional(),
  date_returned: z.boolean().optional(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => itemsArgsSchema)]).optional(),
  loans: z.union([z.boolean(),z.lazy(() => loansArgsSchema)]).optional(),
}).strict()

// LOANS
//------------------------------------------------------

export const loansIncludeSchema: z.ZodType<Prisma.loansInclude> = z.object({
  items_in_loan: z.union([z.boolean(),z.lazy(() => items_in_loanFindManyArgsSchema)]).optional(),
  users_loans_helpdesk_personel_idTousers: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  zones: z.union([z.boolean(),z.lazy(() => zonesArgsSchema)]).optional(),
  recipient_type: z.union([z.boolean(),z.lazy(() => recipient_typeArgsSchema)]).optional(),
  selfservice_case: z.union([z.boolean(),z.lazy(() => selfservice_caseArgsSchema)]).optional(),
  users_loans_user_idTousers: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LoansCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const loansArgsSchema: z.ZodType<Prisma.loansDefaultArgs> = z.object({
  select: z.lazy(() => loansSelectSchema).optional(),
  include: z.lazy(() => loansIncludeSchema).optional(),
}).strict();

export const loansCountOutputTypeArgsSchema: z.ZodType<Prisma.loansCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => loansCountOutputTypeSelectSchema).nullish(),
}).strict();

export const loansCountOutputTypeSelectSchema: z.ZodType<Prisma.loansCountOutputTypeSelect> = z.object({
  items_in_loan: z.boolean().optional(),
}).strict();

export const loansSelectSchema: z.ZodType<Prisma.loansSelect> = z.object({
  UUID: z.boolean().optional(),
  date_created: z.boolean().optional(),
  date_updated: z.boolean().optional(),
  date_of_return: z.boolean().optional(),
  location_of_use_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  helpdesk_personel_id: z.boolean().optional(),
  selfservice_case_id: z.boolean().optional(),
  recipient_type_id: z.boolean().optional(),
  loan_length: z.boolean().optional(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.union([z.boolean(),z.lazy(() => items_in_loanFindManyArgsSchema)]).optional(),
  users_loans_helpdesk_personel_idTousers: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  zones: z.union([z.boolean(),z.lazy(() => zonesArgsSchema)]).optional(),
  recipient_type: z.union([z.boolean(),z.lazy(() => recipient_typeArgsSchema)]).optional(),
  selfservice_case: z.union([z.boolean(),z.lazy(() => selfservice_caseArgsSchema)]).optional(),
  users_loans_user_idTousers: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LoansCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PICKUP LOCATIONS
//------------------------------------------------------

export const pickup_locationsSelectSchema: z.ZodType<Prisma.pickup_locationsSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

// PRODUCT STATUS
//------------------------------------------------------

export const product_statusIncludeSchema: z.ZodType<Prisma.product_statusInclude> = z.object({
  items: z.union([z.boolean(),z.lazy(() => itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Product_statusCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const product_statusArgsSchema: z.ZodType<Prisma.product_statusDefaultArgs> = z.object({
  select: z.lazy(() => product_statusSelectSchema).optional(),
  include: z.lazy(() => product_statusIncludeSchema).optional(),
}).strict();

export const product_statusCountOutputTypeArgsSchema: z.ZodType<Prisma.product_statusCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => product_statusCountOutputTypeSelectSchema).nullish(),
}).strict();

export const product_statusCountOutputTypeSelectSchema: z.ZodType<Prisma.product_statusCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict();

export const product_statusSelectSchema: z.ZodType<Prisma.product_statusSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Product_statusCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCTS
//------------------------------------------------------

export const productsIncludeSchema: z.ZodType<Prisma.productsInclude> = z.object({
  items: z.union([z.boolean(),z.lazy(() => itemsFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => categoriesArgsSchema)]).optional(),
  brands: z.union([z.boolean(),z.lazy(() => brandsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const productsArgsSchema: z.ZodType<Prisma.productsDefaultArgs> = z.object({
  select: z.lazy(() => productsSelectSchema).optional(),
  include: z.lazy(() => productsIncludeSchema).optional(),
}).strict();

export const productsCountOutputTypeArgsSchema: z.ZodType<Prisma.productsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => productsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const productsCountOutputTypeSelectSchema: z.ZodType<Prisma.productsCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict();

export const productsSelectSchema: z.ZodType<Prisma.productsSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  brand_id: z.boolean().optional(),
  category_id: z.boolean().optional(),
  date_created: z.boolean().optional(),
  date_updated: z.boolean().optional(),
  product_id_prefix: z.boolean().optional(),
  image_name: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => itemsFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => categoriesArgsSchema)]).optional(),
  brands: z.union([z.boolean(),z.lazy(() => brandsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// RECIPIENT TYPE
//------------------------------------------------------

export const recipient_typeIncludeSchema: z.ZodType<Prisma.recipient_typeInclude> = z.object({
  loans: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Recipient_typeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const recipient_typeArgsSchema: z.ZodType<Prisma.recipient_typeDefaultArgs> = z.object({
  select: z.lazy(() => recipient_typeSelectSchema).optional(),
  include: z.lazy(() => recipient_typeIncludeSchema).optional(),
}).strict();

export const recipient_typeCountOutputTypeArgsSchema: z.ZodType<Prisma.recipient_typeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => recipient_typeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const recipient_typeCountOutputTypeSelectSchema: z.ZodType<Prisma.recipient_typeCountOutputTypeSelect> = z.object({
  loans: z.boolean().optional(),
}).strict();

export const recipient_typeSelectSchema: z.ZodType<Prisma.recipient_typeSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  loans: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Recipient_typeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SELFSERVICE CASE
//------------------------------------------------------

export const selfservice_caseIncludeSchema: z.ZodType<Prisma.selfservice_caseInclude> = z.object({
  loans: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Selfservice_caseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const selfservice_caseArgsSchema: z.ZodType<Prisma.selfservice_caseDefaultArgs> = z.object({
  select: z.lazy(() => selfservice_caseSelectSchema).optional(),
  include: z.lazy(() => selfservice_caseIncludeSchema).optional(),
}).strict();

export const selfservice_caseCountOutputTypeArgsSchema: z.ZodType<Prisma.selfservice_caseCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => selfservice_caseCountOutputTypeSelectSchema).nullish(),
}).strict();

export const selfservice_caseCountOutputTypeSelectSchema: z.ZodType<Prisma.selfservice_caseCountOutputTypeSelect> = z.object({
  loans: z.boolean().optional(),
}).strict();

export const selfservice_caseSelectSchema: z.ZodType<Prisma.selfservice_caseSelect> = z.object({
  UUID: z.boolean().optional(),
  delivery_location_id: z.boolean().optional(),
  pickup_location_id: z.boolean().optional(),
  distribution_date: z.boolean().optional(),
  estimated_time_consumption: z.boolean().optional(),
  loans: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Selfservice_caseCountOutputTypeArgsSchema)]).optional(),
}).strict()

// STORAGE LOCATIONS
//------------------------------------------------------

export const storage_locationsIncludeSchema: z.ZodType<Prisma.storage_locationsInclude> = z.object({
  items: z.union([z.boolean(),z.lazy(() => itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Storage_locationsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const storage_locationsArgsSchema: z.ZodType<Prisma.storage_locationsDefaultArgs> = z.object({
  select: z.lazy(() => storage_locationsSelectSchema).optional(),
  include: z.lazy(() => storage_locationsIncludeSchema).optional(),
}).strict();

export const storage_locationsCountOutputTypeArgsSchema: z.ZodType<Prisma.storage_locationsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => storage_locationsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const storage_locationsCountOutputTypeSelectSchema: z.ZodType<Prisma.storage_locationsCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict();

export const storage_locationsSelectSchema: z.ZodType<Prisma.storage_locationsSelect> = z.object({
  UUID: z.boolean().optional(),
  zone_id: z.boolean().optional(),
  kabinet: z.boolean().optional(),
  shelf: z.boolean().optional(),
  idle_since: z.boolean().optional(),
  img_name: z.boolean().optional(),
  date_updated: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Storage_locationsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USERS
//------------------------------------------------------

export const usersIncludeSchema: z.ZodType<Prisma.usersInclude> = z.object({
  loans_loans_helpdesk_personel_idTousers: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  loans_loans_user_idTousers: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const usersArgsSchema: z.ZodType<Prisma.usersDefaultArgs> = z.object({
  select: z.lazy(() => usersSelectSchema).optional(),
  include: z.lazy(() => usersIncludeSchema).optional(),
}).strict();

export const usersCountOutputTypeArgsSchema: z.ZodType<Prisma.usersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => usersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const usersCountOutputTypeSelectSchema: z.ZodType<Prisma.usersCountOutputTypeSelect> = z.object({
  loans_loans_helpdesk_personel_idTousers: z.boolean().optional(),
  loans_loans_user_idTousers: z.boolean().optional(),
}).strict();

export const usersSelectSchema: z.ZodType<Prisma.usersSelect> = z.object({
  UUID: z.boolean().optional(),
  username: z.boolean().optional(),
  date_created: z.boolean().optional(),
  date_updated: z.boolean().optional(),
  loans_loans_helpdesk_personel_idTousers: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  loans_loans_user_idTousers: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ZONES
//------------------------------------------------------

export const zonesIncludeSchema: z.ZodType<Prisma.zonesInclude> = z.object({
  loans: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  buildings: z.union([z.boolean(),z.lazy(() => buildingsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ZonesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const zonesArgsSchema: z.ZodType<Prisma.zonesDefaultArgs> = z.object({
  select: z.lazy(() => zonesSelectSchema).optional(),
  include: z.lazy(() => zonesIncludeSchema).optional(),
}).strict();

export const zonesCountOutputTypeArgsSchema: z.ZodType<Prisma.zonesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => zonesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const zonesCountOutputTypeSelectSchema: z.ZodType<Prisma.zonesCountOutputTypeSelect> = z.object({
  loans: z.boolean().optional(),
}).strict();

export const zonesSelectSchema: z.ZodType<Prisma.zonesSelect> = z.object({
  UUID: z.boolean().optional(),
  name: z.boolean().optional(),
  building_id: z.boolean().optional(),
  floor_level: z.boolean().optional(),
  loans: z.union([z.boolean(),z.lazy(() => loansFindManyArgsSchema)]).optional(),
  buildings: z.union([z.boolean(),z.lazy(() => buildingsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ZonesCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FEEDBACK
//------------------------------------------------------

export const feedbackSelectSchema: z.ZodType<Prisma.feedbackSelect> = z.object({
  UUID: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  date_created: z.boolean().optional(),
}).strict()

// AVAILABLE PRODUCTS VIEW
//------------------------------------------------------

export const available_products_viewSelectSchema: z.ZodType<Prisma.available_products_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Brand: z.boolean().optional(),
  Stregkode: z.boolean().optional(),
}).strict()

// BRANDS VIEW
//------------------------------------------------------

export const brands_viewSelectSchema: z.ZodType<Prisma.brands_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
}).strict()

// CATEGORIES VIEW
//------------------------------------------------------

export const categories_viewSelectSchema: z.ZodType<Prisma.categories_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
}).strict()

// ITEMS FROM LOANS
//------------------------------------------------------

export const items_from_loansSelectSchema: z.ZodType<Prisma.items_from_loansSelect> = z.object({
  UUID: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Produkt: z.boolean().optional(),
  Med_taske: z.boolean().optional(),
  Med_Laas: z.boolean().optional(),
  Stregkode: z.boolean().optional(),
  loan_id: z.boolean().optional(),
  Returneret: z.boolean().optional(),
}).strict()

// ITEMS VIEW
//------------------------------------------------------

export const items_viewSelectSchema: z.ZodType<Prisma.items_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Stregkode: z.boolean().optional(),
  Status: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Opdateret: z.boolean().optional(),
}).strict()

// LOANS VIEW
//------------------------------------------------------

export const loans_viewSelectSchema: z.ZodType<Prisma.loans_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Laaner: z.boolean().optional(),
  Udlaaner: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Opdateret: z.boolean().optional(),
  Returneret: z.boolean().optional(),
  Recipent: z.boolean().optional(),
  Laanetid: z.boolean().optional(),
  Returneringsdato: z.boolean().optional(),
}).strict()

// LOANS VIEW EXTENDED
//------------------------------------------------------

export const loans_view_extendedSelectSchema: z.ZodType<Prisma.loans_view_extendedSelect> = z.object({
  UUID: z.boolean().optional(),
  location_of_use_id: z.boolean().optional(),
  selfservice_case_id: z.boolean().optional(),
  loan_length: z.boolean().optional(),
  zone_id: z.boolean().optional(),
  kabinet: z.boolean().optional(),
  shelf: z.boolean().optional(),
  loaner_id: z.boolean().optional(),
  loaner_username: z.boolean().optional(),
  personel_id: z.boolean().optional(),
  personel_username: z.boolean().optional(),
  recipient_type_id: z.boolean().optional(),
  recipient_name: z.boolean().optional(),
}).strict()

// PRODUCTS VIEW
//------------------------------------------------------

export const products_viewSelectSchema: z.ZodType<Prisma.products_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Kategori: z.boolean().optional(),
  Brand: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Opdateret: z.boolean().optional(),
}).strict()

// USERS VIEW
//------------------------------------------------------

export const users_viewSelectSchema: z.ZodType<Prisma.users_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Brugernavn: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Opdateret: z.boolean().optional(),
}).strict()

// PRODUCT STATUS VIEW
//------------------------------------------------------

export const product_status_viewSelectSchema: z.ZodType<Prisma.product_status_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
}).strict()

// ITEMS WITHOUT STATUS
//------------------------------------------------------

export const items_without_statusSelectSchema: z.ZodType<Prisma.items_without_statusSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Stregkode: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Opdateret: z.boolean().optional(),
}).strict()

// ITEMS WITH STATUS
//------------------------------------------------------

export const items_with_statusSelectSchema: z.ZodType<Prisma.items_with_statusSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Stregkode: z.boolean().optional(),
  Status: z.boolean().optional(),
  Oprettet: z.boolean().optional(),
  Opdateret: z.boolean().optional(),
}).strict()

// ZONES VIEW
//------------------------------------------------------

export const zones_viewSelectSchema: z.ZodType<Prisma.zones_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
  Bygning: z.boolean().optional(),
  Etage: z.boolean().optional(),
}).strict()

// BUILDINGS VIEW
//------------------------------------------------------

export const buildings_viewSelectSchema: z.ZodType<Prisma.buildings_viewSelect> = z.object({
  UUID: z.boolean().optional(),
  Navn: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const brandsWhereInputSchema: z.ZodType<Prisma.brandsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => brandsWhereInputSchema),z.lazy(() => brandsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => brandsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => brandsWhereInputSchema),z.lazy(() => brandsWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductsListRelationFilterSchema).optional()
}).strict();

export const brandsOrderByWithRelationInputSchema: z.ZodType<Prisma.brandsOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => productsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const brandsWhereUniqueInputSchema: z.ZodType<Prisma.brandsWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => brandsWhereInputSchema),z.lazy(() => brandsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => brandsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => brandsWhereInputSchema),z.lazy(() => brandsWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductsListRelationFilterSchema).optional()
}).strict());

export const brandsOrderByWithAggregationInputSchema: z.ZodType<Prisma.brandsOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => brandsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => brandsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => brandsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => brandsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => brandsSumOrderByAggregateInputSchema).optional()
}).strict();

export const brandsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.brandsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => brandsScalarWhereWithAggregatesInputSchema),z.lazy(() => brandsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => brandsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => brandsScalarWhereWithAggregatesInputSchema),z.lazy(() => brandsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const buildingsWhereInputSchema: z.ZodType<Prisma.buildingsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => buildingsWhereInputSchema),z.lazy(() => buildingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => buildingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => buildingsWhereInputSchema),z.lazy(() => buildingsWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  zones: z.lazy(() => ZonesListRelationFilterSchema).optional()
}).strict();

export const buildingsOrderByWithRelationInputSchema: z.ZodType<Prisma.buildingsOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  zones: z.lazy(() => zonesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const buildingsWhereUniqueInputSchema: z.ZodType<Prisma.buildingsWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => buildingsWhereInputSchema),z.lazy(() => buildingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => buildingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => buildingsWhereInputSchema),z.lazy(() => buildingsWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  zones: z.lazy(() => ZonesListRelationFilterSchema).optional()
}).strict());

export const buildingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.buildingsOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => buildingsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => buildingsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => buildingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => buildingsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => buildingsSumOrderByAggregateInputSchema).optional()
}).strict();

export const buildingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.buildingsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => buildingsScalarWhereWithAggregatesInputSchema),z.lazy(() => buildingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => buildingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => buildingsScalarWhereWithAggregatesInputSchema),z.lazy(() => buildingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const categoriesWhereInputSchema: z.ZodType<Prisma.categoriesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => categoriesWhereInputSchema),z.lazy(() => categoriesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => categoriesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categoriesWhereInputSchema),z.lazy(() => categoriesWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductsListRelationFilterSchema).optional()
}).strict();

export const categoriesOrderByWithRelationInputSchema: z.ZodType<Prisma.categoriesOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => productsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const categoriesWhereUniqueInputSchema: z.ZodType<Prisma.categoriesWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => categoriesWhereInputSchema),z.lazy(() => categoriesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => categoriesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categoriesWhereInputSchema),z.lazy(() => categoriesWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductsListRelationFilterSchema).optional()
}).strict());

export const categoriesOrderByWithAggregationInputSchema: z.ZodType<Prisma.categoriesOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => categoriesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => categoriesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => categoriesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => categoriesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => categoriesSumOrderByAggregateInputSchema).optional()
}).strict();

export const categoriesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.categoriesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema),z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema),z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const itemsWhereInputSchema: z.ZodType<Prisma.itemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => itemsWhereInputSchema),z.lazy(() => itemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => itemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => itemsWhereInputSchema),z.lazy(() => itemsWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  storage_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  product_status_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  product_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  barcode_number: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  products: z.union([ z.lazy(() => ProductsRelationFilterSchema),z.lazy(() => productsWhereInputSchema) ]).optional(),
  product_status: z.union([ z.lazy(() => Product_statusNullableRelationFilterSchema),z.lazy(() => product_statusWhereInputSchema) ]).optional().nullable(),
  storage_locations: z.union([ z.lazy(() => Storage_locationsNullableRelationFilterSchema),z.lazy(() => storage_locationsWhereInputSchema) ]).optional().nullable(),
  items_in_loan: z.lazy(() => Items_in_loanListRelationFilterSchema).optional()
}).strict();

export const itemsOrderByWithRelationInputSchema: z.ZodType<Prisma.itemsOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  storage_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  product_status_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  barcode_number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  products: z.lazy(() => productsOrderByWithRelationInputSchema).optional(),
  product_status: z.lazy(() => product_statusOrderByWithRelationInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsOrderByWithRelationInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanOrderByRelationAggregateInputSchema).optional()
}).strict();

export const itemsWhereUniqueInputSchema: z.ZodType<Prisma.itemsWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => itemsWhereInputSchema),z.lazy(() => itemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => itemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => itemsWhereInputSchema),z.lazy(() => itemsWhereInputSchema).array() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  storage_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  product_status_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  product_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  barcode_number: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  products: z.union([ z.lazy(() => ProductsRelationFilterSchema),z.lazy(() => productsWhereInputSchema) ]).optional(),
  product_status: z.union([ z.lazy(() => Product_statusNullableRelationFilterSchema),z.lazy(() => product_statusWhereInputSchema) ]).optional().nullable(),
  storage_locations: z.union([ z.lazy(() => Storage_locationsNullableRelationFilterSchema),z.lazy(() => storage_locationsWhereInputSchema) ]).optional().nullable(),
  items_in_loan: z.lazy(() => Items_in_loanListRelationFilterSchema).optional()
}).strict());

export const itemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.itemsOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  storage_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  product_status_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  barcode_number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => itemsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => itemsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => itemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => itemsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => itemsSumOrderByAggregateInputSchema).optional()
}).strict();

export const itemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.itemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => itemsScalarWhereWithAggregatesInputSchema),z.lazy(() => itemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => itemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => itemsScalarWhereWithAggregatesInputSchema),z.lazy(() => itemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  storage_location_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  product_status_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  product_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  barcode_number: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const items_in_loanWhereInputSchema: z.ZodType<Prisma.items_in_loanWhereInput> = z.object({
  AND: z.union([ z.lazy(() => items_in_loanWhereInputSchema),z.lazy(() => items_in_loanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_in_loanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_in_loanWhereInputSchema),z.lazy(() => items_in_loanWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  loan_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  item_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_returned: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  withBag: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  withLock: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  items: z.union([ z.lazy(() => ItemsRelationFilterSchema),z.lazy(() => itemsWhereInputSchema) ]).optional(),
  loans: z.union([ z.lazy(() => LoansRelationFilterSchema),z.lazy(() => loansWhereInputSchema) ]).optional(),
}).strict();

export const items_in_loanOrderByWithRelationInputSchema: z.ZodType<Prisma.items_in_loanOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_returned: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  withBag: z.lazy(() => SortOrderSchema).optional(),
  withLock: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => itemsOrderByWithRelationInputSchema).optional(),
  loans: z.lazy(() => loansOrderByWithRelationInputSchema).optional()
}).strict();

export const items_in_loanWhereUniqueInputSchema: z.ZodType<Prisma.items_in_loanWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => items_in_loanWhereInputSchema),z.lazy(() => items_in_loanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_in_loanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_in_loanWhereInputSchema),z.lazy(() => items_in_loanWhereInputSchema).array() ]).optional(),
  loan_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  item_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_returned: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  withBag: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  withLock: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  items: z.union([ z.lazy(() => ItemsRelationFilterSchema),z.lazy(() => itemsWhereInputSchema) ]).optional(),
  loans: z.union([ z.lazy(() => LoansRelationFilterSchema),z.lazy(() => loansWhereInputSchema) ]).optional(),
}).strict());

export const items_in_loanOrderByWithAggregationInputSchema: z.ZodType<Prisma.items_in_loanOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_returned: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  withBag: z.lazy(() => SortOrderSchema).optional(),
  withLock: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => items_in_loanCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => items_in_loanAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => items_in_loanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => items_in_loanMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => items_in_loanSumOrderByAggregateInputSchema).optional()
}).strict();

export const items_in_loanScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.items_in_loanScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => items_in_loanScalarWhereWithAggregatesInputSchema),z.lazy(() => items_in_loanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_in_loanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_in_loanScalarWhereWithAggregatesInputSchema),z.lazy(() => items_in_loanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  loan_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  item_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date_returned: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  withBag: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  withLock: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const loansWhereInputSchema: z.ZodType<Prisma.loansWhereInput> = z.object({
  AND: z.union([ z.lazy(() => loansWhereInputSchema),z.lazy(() => loansWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loansWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loansWhereInputSchema),z.lazy(() => loansWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_of_return: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  helpdesk_personel_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  mail_sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  items_in_loan: z.lazy(() => Items_in_loanListRelationFilterSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  zones: z.union([ z.lazy(() => ZonesNullableRelationFilterSchema),z.lazy(() => zonesWhereInputSchema) ]).optional().nullable(),
  recipient_type: z.union([ z.lazy(() => Recipient_typeNullableRelationFilterSchema),z.lazy(() => recipient_typeWhereInputSchema) ]).optional().nullable(),
  selfservice_case: z.union([ z.lazy(() => Selfservice_caseNullableRelationFilterSchema),z.lazy(() => selfservice_caseWhereInputSchema) ]).optional().nullable(),
  users_loans_user_idTousers: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict();

export const loansOrderByWithRelationInputSchema: z.ZodType<Prisma.loansOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  date_of_return: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_of_use_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  selfservice_case_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recipient_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loan_length: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mail_sent: z.lazy(() => SortOrderSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanOrderByRelationAggregateInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  zones: z.lazy(() => zonesOrderByWithRelationInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeOrderByWithRelationInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseOrderByWithRelationInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersOrderByWithRelationInputSchema).optional()
}).strict();

export const loansWhereUniqueInputSchema: z.ZodType<Prisma.loansWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => loansWhereInputSchema),z.lazy(() => loansWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loansWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loansWhereInputSchema),z.lazy(() => loansWhereInputSchema).array() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_of_return: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  helpdesk_personel_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  mail_sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  items_in_loan: z.lazy(() => Items_in_loanListRelationFilterSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  zones: z.union([ z.lazy(() => ZonesNullableRelationFilterSchema),z.lazy(() => zonesWhereInputSchema) ]).optional().nullable(),
  recipient_type: z.union([ z.lazy(() => Recipient_typeNullableRelationFilterSchema),z.lazy(() => recipient_typeWhereInputSchema) ]).optional().nullable(),
  selfservice_case: z.union([ z.lazy(() => Selfservice_caseNullableRelationFilterSchema),z.lazy(() => selfservice_caseWhereInputSchema) ]).optional().nullable(),
  users_loans_user_idTousers: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict());

export const loansOrderByWithAggregationInputSchema: z.ZodType<Prisma.loansOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  date_of_return: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location_of_use_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  selfservice_case_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recipient_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loan_length: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mail_sent: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => loansCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => loansAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => loansMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => loansMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => loansSumOrderByAggregateInputSchema).optional()
}).strict();

export const loansScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.loansScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => loansScalarWhereWithAggregatesInputSchema),z.lazy(() => loansScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => loansScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loansScalarWhereWithAggregatesInputSchema),z.lazy(() => loansScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date_of_return: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  helpdesk_personel_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  mail_sent: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const pickup_locationsWhereInputSchema: z.ZodType<Prisma.pickup_locationsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => pickup_locationsWhereInputSchema),z.lazy(() => pickup_locationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => pickup_locationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => pickup_locationsWhereInputSchema),z.lazy(() => pickup_locationsWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const pickup_locationsOrderByWithRelationInputSchema: z.ZodType<Prisma.pickup_locationsOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const pickup_locationsWhereUniqueInputSchema: z.ZodType<Prisma.pickup_locationsWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => pickup_locationsWhereInputSchema),z.lazy(() => pickup_locationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => pickup_locationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => pickup_locationsWhereInputSchema),z.lazy(() => pickup_locationsWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const pickup_locationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.pickup_locationsOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => pickup_locationsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => pickup_locationsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => pickup_locationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => pickup_locationsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => pickup_locationsSumOrderByAggregateInputSchema).optional()
}).strict();

export const pickup_locationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.pickup_locationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => pickup_locationsScalarWhereWithAggregatesInputSchema),z.lazy(() => pickup_locationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => pickup_locationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => pickup_locationsScalarWhereWithAggregatesInputSchema),z.lazy(() => pickup_locationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const product_statusWhereInputSchema: z.ZodType<Prisma.product_statusWhereInput> = z.object({
  AND: z.union([ z.lazy(() => product_statusWhereInputSchema),z.lazy(() => product_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => product_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => product_statusWhereInputSchema),z.lazy(() => product_statusWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  items: z.lazy(() => ItemsListRelationFilterSchema).optional()
}).strict();

export const product_statusOrderByWithRelationInputSchema: z.ZodType<Prisma.product_statusOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => itemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const product_statusWhereUniqueInputSchema: z.ZodType<Prisma.product_statusWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => product_statusWhereInputSchema),z.lazy(() => product_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => product_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => product_statusWhereInputSchema),z.lazy(() => product_statusWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  items: z.lazy(() => ItemsListRelationFilterSchema).optional()
}).strict());

export const product_statusOrderByWithAggregationInputSchema: z.ZodType<Prisma.product_statusOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => product_statusCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => product_statusAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => product_statusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => product_statusMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => product_statusSumOrderByAggregateInputSchema).optional()
}).strict();

export const product_statusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.product_statusScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => product_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => product_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => product_statusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => product_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => product_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const productsWhereInputSchema: z.ZodType<Prisma.productsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => productsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product_id_prefix: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => ItemsListRelationFilterSchema).optional(),
  categories: z.union([ z.lazy(() => CategoriesRelationFilterSchema),z.lazy(() => categoriesWhereInputSchema) ]).optional(),
  brands: z.union([ z.lazy(() => BrandsRelationFilterSchema),z.lazy(() => brandsWhereInputSchema) ]).optional(),
}).strict();

export const productsOrderByWithRelationInputSchema: z.ZodType<Prisma.productsOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  product_id_prefix: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  items: z.lazy(() => itemsOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => categoriesOrderByWithRelationInputSchema).optional(),
  brands: z.lazy(() => brandsOrderByWithRelationInputSchema).optional()
}).strict();

export const productsWhereUniqueInputSchema: z.ZodType<Prisma.productsWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => productsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  category_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product_id_prefix: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => ItemsListRelationFilterSchema).optional(),
  categories: z.union([ z.lazy(() => CategoriesRelationFilterSchema),z.lazy(() => categoriesWhereInputSchema) ]).optional(),
  brands: z.union([ z.lazy(() => BrandsRelationFilterSchema),z.lazy(() => brandsWhereInputSchema) ]).optional(),
}).strict());

export const productsOrderByWithAggregationInputSchema: z.ZodType<Prisma.productsOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  product_id_prefix: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => productsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => productsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => productsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => productsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => productsSumOrderByAggregateInputSchema).optional()
}).strict();

export const productsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.productsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => productsScalarWhereWithAggregatesInputSchema),z.lazy(() => productsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => productsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => productsScalarWhereWithAggregatesInputSchema),z.lazy(() => productsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brand_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  category_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  product_id_prefix: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const recipient_typeWhereInputSchema: z.ZodType<Prisma.recipient_typeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => recipient_typeWhereInputSchema),z.lazy(() => recipient_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => recipient_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => recipient_typeWhereInputSchema),z.lazy(() => recipient_typeWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  loans: z.lazy(() => LoansListRelationFilterSchema).optional()
}).strict();

export const recipient_typeOrderByWithRelationInputSchema: z.ZodType<Prisma.recipient_typeOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  loans: z.lazy(() => loansOrderByRelationAggregateInputSchema).optional()
}).strict();

export const recipient_typeWhereUniqueInputSchema: z.ZodType<Prisma.recipient_typeWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => recipient_typeWhereInputSchema),z.lazy(() => recipient_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => recipient_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => recipient_typeWhereInputSchema),z.lazy(() => recipient_typeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  loans: z.lazy(() => LoansListRelationFilterSchema).optional()
}).strict());

export const recipient_typeOrderByWithAggregationInputSchema: z.ZodType<Prisma.recipient_typeOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => recipient_typeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => recipient_typeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => recipient_typeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => recipient_typeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => recipient_typeSumOrderByAggregateInputSchema).optional()
}).strict();

export const recipient_typeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.recipient_typeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => recipient_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => recipient_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => recipient_typeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => recipient_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => recipient_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const selfservice_caseWhereInputSchema: z.ZodType<Prisma.selfservice_caseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => selfservice_caseWhereInputSchema),z.lazy(() => selfservice_caseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => selfservice_caseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => selfservice_caseWhereInputSchema),z.lazy(() => selfservice_caseWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  delivery_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  pickup_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  distribution_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  estimated_time_consumption: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  loans: z.lazy(() => LoansListRelationFilterSchema).optional()
}).strict();

export const selfservice_caseOrderByWithRelationInputSchema: z.ZodType<Prisma.selfservice_caseOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pickup_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  distribution_date: z.lazy(() => SortOrderSchema).optional(),
  estimated_time_consumption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loans: z.lazy(() => loansOrderByRelationAggregateInputSchema).optional()
}).strict();

export const selfservice_caseWhereUniqueInputSchema: z.ZodType<Prisma.selfservice_caseWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => selfservice_caseWhereInputSchema),z.lazy(() => selfservice_caseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => selfservice_caseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => selfservice_caseWhereInputSchema),z.lazy(() => selfservice_caseWhereInputSchema).array() ]).optional(),
  delivery_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  pickup_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  distribution_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  estimated_time_consumption: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  loans: z.lazy(() => LoansListRelationFilterSchema).optional()
}).strict());

export const selfservice_caseOrderByWithAggregationInputSchema: z.ZodType<Prisma.selfservice_caseOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pickup_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  distribution_date: z.lazy(() => SortOrderSchema).optional(),
  estimated_time_consumption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => selfservice_caseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => selfservice_caseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => selfservice_caseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => selfservice_caseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => selfservice_caseSumOrderByAggregateInputSchema).optional()
}).strict();

export const selfservice_caseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.selfservice_caseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => selfservice_caseScalarWhereWithAggregatesInputSchema),z.lazy(() => selfservice_caseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => selfservice_caseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => selfservice_caseScalarWhereWithAggregatesInputSchema),z.lazy(() => selfservice_caseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  delivery_location_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  pickup_location_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  distribution_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  estimated_time_consumption: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const storage_locationsWhereInputSchema: z.ZodType<Prisma.storage_locationsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => storage_locationsWhereInputSchema),z.lazy(() => storage_locationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => storage_locationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => storage_locationsWhereInputSchema),z.lazy(() => storage_locationsWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  zone_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  kabinet: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shelf: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  idle_since: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  img_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  items: z.lazy(() => ItemsListRelationFilterSchema).optional()
}).strict();

export const storage_locationsOrderByWithRelationInputSchema: z.ZodType<Prisma.storage_locationsOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shelf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  idle_since: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  img_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => itemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const storage_locationsWhereUniqueInputSchema: z.ZodType<Prisma.storage_locationsWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => storage_locationsWhereInputSchema),z.lazy(() => storage_locationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => storage_locationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => storage_locationsWhereInputSchema),z.lazy(() => storage_locationsWhereInputSchema).array() ]).optional(),
  zone_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  kabinet: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shelf: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  idle_since: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  img_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  items: z.lazy(() => ItemsListRelationFilterSchema).optional()
}).strict());

export const storage_locationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.storage_locationsOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shelf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  idle_since: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  img_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => storage_locationsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => storage_locationsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => storage_locationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => storage_locationsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => storage_locationsSumOrderByAggregateInputSchema).optional()
}).strict();

export const storage_locationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.storage_locationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => storage_locationsScalarWhereWithAggregatesInputSchema),z.lazy(() => storage_locationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => storage_locationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => storage_locationsScalarWhereWithAggregatesInputSchema),z.lazy(() => storage_locationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  zone_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  kabinet: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  shelf: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  idle_since: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  img_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  date_updated: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const usersWhereInputSchema: z.ZodType<Prisma.usersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => LoansListRelationFilterSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => LoansListRelationFilterSchema).optional()
}).strict();

export const usersOrderByWithRelationInputSchema: z.ZodType<Prisma.usersOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansOrderByRelationAggregateInputSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansOrderByRelationAggregateInputSchema).optional()
}).strict();

export const usersWhereUniqueInputSchema: z.ZodType<Prisma.usersWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => LoansListRelationFilterSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => LoansListRelationFilterSchema).optional()
}).strict());

export const usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.usersOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => usersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => usersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => usersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => usersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => usersSumOrderByAggregateInputSchema).optional()
}).strict();

export const usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.usersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => usersScalarWhereWithAggregatesInputSchema),z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersScalarWhereWithAggregatesInputSchema),z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const zonesWhereInputSchema: z.ZodType<Prisma.zonesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => zonesWhereInputSchema),z.lazy(() => zonesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => zonesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zonesWhereInputSchema),z.lazy(() => zonesWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  building_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  floor_level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  loans: z.lazy(() => LoansListRelationFilterSchema).optional(),
  buildings: z.union([ z.lazy(() => BuildingsRelationFilterSchema),z.lazy(() => buildingsWhereInputSchema) ]).optional(),
}).strict();

export const zonesOrderByWithRelationInputSchema: z.ZodType<Prisma.zonesOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional(),
  loans: z.lazy(() => loansOrderByRelationAggregateInputSchema).optional(),
  buildings: z.lazy(() => buildingsOrderByWithRelationInputSchema).optional()
}).strict();

export const zonesWhereUniqueInputSchema: z.ZodType<Prisma.zonesWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => zonesWhereInputSchema),z.lazy(() => zonesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => zonesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zonesWhereInputSchema),z.lazy(() => zonesWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  building_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  floor_level: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  loans: z.lazy(() => LoansListRelationFilterSchema).optional(),
  buildings: z.union([ z.lazy(() => BuildingsRelationFilterSchema),z.lazy(() => buildingsWhereInputSchema) ]).optional(),
}).strict());

export const zonesOrderByWithAggregationInputSchema: z.ZodType<Prisma.zonesOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => zonesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => zonesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => zonesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => zonesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => zonesSumOrderByAggregateInputSchema).optional()
}).strict();

export const zonesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.zonesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => zonesScalarWhereWithAggregatesInputSchema),z.lazy(() => zonesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => zonesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zonesScalarWhereWithAggregatesInputSchema),z.lazy(() => zonesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  building_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  floor_level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const feedbackWhereInputSchema: z.ZodType<Prisma.feedbackWhereInput> = z.object({
  AND: z.union([ z.lazy(() => feedbackWhereInputSchema),z.lazy(() => feedbackWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => feedbackWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => feedbackWhereInputSchema),z.lazy(() => feedbackWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const feedbackOrderByWithRelationInputSchema: z.ZodType<Prisma.feedbackOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const feedbackWhereUniqueInputSchema: z.ZodType<Prisma.feedbackWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => feedbackWhereInputSchema),z.lazy(() => feedbackWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => feedbackWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => feedbackWhereInputSchema),z.lazy(() => feedbackWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const feedbackOrderByWithAggregationInputSchema: z.ZodType<Prisma.feedbackOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => feedbackCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => feedbackAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => feedbackMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => feedbackMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => feedbackSumOrderByAggregateInputSchema).optional()
}).strict();

export const feedbackScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.feedbackScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => feedbackScalarWhereWithAggregatesInputSchema),z.lazy(() => feedbackScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => feedbackScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => feedbackScalarWhereWithAggregatesInputSchema),z.lazy(() => feedbackScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const available_products_viewWhereInputSchema: z.ZodType<Prisma.available_products_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => available_products_viewWhereInputSchema),z.lazy(() => available_products_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => available_products_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => available_products_viewWhereInputSchema),z.lazy(() => available_products_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const available_products_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.available_products_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Brand: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const available_products_viewWhereUniqueInputSchema: z.ZodType<Prisma.available_products_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => available_products_viewWhereInputSchema),z.lazy(() => available_products_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => available_products_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => available_products_viewWhereInputSchema),z.lazy(() => available_products_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const available_products_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.available_products_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Brand: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => available_products_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => available_products_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => available_products_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => available_products_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => available_products_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const available_products_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.available_products_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => available_products_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => available_products_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => available_products_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => available_products_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => available_products_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Brand: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const brands_viewWhereInputSchema: z.ZodType<Prisma.brands_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => brands_viewWhereInputSchema),z.lazy(() => brands_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => brands_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => brands_viewWhereInputSchema),z.lazy(() => brands_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const brands_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.brands_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brands_viewWhereUniqueInputSchema: z.ZodType<Prisma.brands_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => brands_viewWhereInputSchema),z.lazy(() => brands_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => brands_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => brands_viewWhereInputSchema),z.lazy(() => brands_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const brands_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.brands_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => brands_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => brands_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => brands_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => brands_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => brands_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const brands_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.brands_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => brands_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => brands_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => brands_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => brands_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => brands_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const categories_viewWhereInputSchema: z.ZodType<Prisma.categories_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => categories_viewWhereInputSchema),z.lazy(() => categories_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => categories_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categories_viewWhereInputSchema),z.lazy(() => categories_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const categories_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.categories_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categories_viewWhereUniqueInputSchema: z.ZodType<Prisma.categories_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => categories_viewWhereInputSchema),z.lazy(() => categories_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => categories_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categories_viewWhereInputSchema),z.lazy(() => categories_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const categories_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.categories_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => categories_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => categories_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => categories_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => categories_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => categories_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const categories_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.categories_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => categories_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => categories_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => categories_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categories_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => categories_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const items_from_loansWhereInputSchema: z.ZodType<Prisma.items_from_loansWhereInput> = z.object({
  AND: z.union([ z.lazy(() => items_from_loansWhereInputSchema),z.lazy(() => items_from_loansWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_from_loansWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_from_loansWhereInputSchema),z.lazy(() => items_from_loansWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Produkt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Med_taske: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  Med_Laas: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  loan_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Returneret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const items_from_loansOrderByWithRelationInputSchema: z.ZodType<Prisma.items_from_loansOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Produkt: z.lazy(() => SortOrderSchema).optional(),
  Med_taske: z.lazy(() => SortOrderSchema).optional(),
  Med_Laas: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const items_from_loansWhereUniqueInputSchema: z.ZodType<Prisma.items_from_loansWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => items_from_loansWhereInputSchema),z.lazy(() => items_from_loansWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_from_loansWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_from_loansWhereInputSchema),z.lazy(() => items_from_loansWhereInputSchema).array() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Produkt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Med_taske: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  Med_Laas: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  loan_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  Returneret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const items_from_loansOrderByWithAggregationInputSchema: z.ZodType<Prisma.items_from_loansOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Produkt: z.lazy(() => SortOrderSchema).optional(),
  Med_taske: z.lazy(() => SortOrderSchema).optional(),
  Med_Laas: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => items_from_loansCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => items_from_loansAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => items_from_loansMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => items_from_loansMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => items_from_loansSumOrderByAggregateInputSchema).optional()
}).strict();

export const items_from_loansScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.items_from_loansScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => items_from_loansScalarWhereWithAggregatesInputSchema),z.lazy(() => items_from_loansScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_from_loansScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_from_loansScalarWhereWithAggregatesInputSchema),z.lazy(() => items_from_loansScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Produkt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Med_taske: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  Med_Laas: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  Stregkode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  loan_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Returneret: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const items_viewWhereInputSchema: z.ZodType<Prisma.items_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => items_viewWhereInputSchema),z.lazy(() => items_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_viewWhereInputSchema),z.lazy(() => items_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const items_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.items_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const items_viewWhereUniqueInputSchema: z.ZodType<Prisma.items_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => items_viewWhereInputSchema),z.lazy(() => items_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_viewWhereInputSchema),z.lazy(() => items_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const items_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.items_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => items_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => items_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => items_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => items_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => items_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const items_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.items_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => items_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => items_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => items_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Status: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const loans_viewWhereInputSchema: z.ZodType<Prisma.loans_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => loans_viewWhereInputSchema),z.lazy(() => loans_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loans_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loans_viewWhereInputSchema),z.lazy(() => loans_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Laaner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Udlaaner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Returneret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  Recipent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Laanetid: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Returneringsdato: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const loans_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.loans_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Laaner: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Udlaaner: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Recipent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Laanetid: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Returneringsdato: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const loans_viewWhereUniqueInputSchema: z.ZodType<Prisma.loans_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => loans_viewWhereInputSchema),z.lazy(() => loans_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loans_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loans_viewWhereInputSchema),z.lazy(() => loans_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Laaner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Udlaaner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Returneret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  Recipent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Laanetid: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Returneringsdato: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const loans_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.loans_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Laaner: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Udlaaner: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Recipent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Laanetid: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Returneringsdato: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => loans_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => loans_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => loans_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => loans_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => loans_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const loans_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.loans_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => loans_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => loans_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => loans_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loans_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => loans_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Laaner: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Udlaaner: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Returneret: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  Recipent: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Laanetid: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Returneringsdato: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const loans_view_extendedWhereInputSchema: z.ZodType<Prisma.loans_view_extendedWhereInput> = z.object({
  AND: z.union([ z.lazy(() => loans_view_extendedWhereInputSchema),z.lazy(() => loans_view_extendedWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loans_view_extendedWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loans_view_extendedWhereInputSchema),z.lazy(() => loans_view_extendedWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  zone_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  kabinet: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shelf: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  loaner_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  loaner_username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  personel_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  personel_username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  recipient_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const loans_view_extendedOrderByWithRelationInputSchema: z.ZodType<Prisma.loans_view_extendedOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  selfservice_case_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loan_length: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  zone_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  kabinet: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shelf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loaner_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loaner_username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personel_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personel_username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recipient_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recipient_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const loans_view_extendedWhereUniqueInputSchema: z.ZodType<Prisma.loans_view_extendedWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => loans_view_extendedWhereInputSchema),z.lazy(() => loans_view_extendedWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loans_view_extendedWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loans_view_extendedWhereInputSchema),z.lazy(() => loans_view_extendedWhereInputSchema).array() ]).optional(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  zone_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  kabinet: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shelf: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  loaner_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  loaner_username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  personel_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  personel_username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  recipient_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const loans_view_extendedOrderByWithAggregationInputSchema: z.ZodType<Prisma.loans_view_extendedOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  selfservice_case_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loan_length: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  zone_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  kabinet: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shelf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loaner_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loaner_username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personel_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personel_username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recipient_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recipient_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => loans_view_extendedCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => loans_view_extendedAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => loans_view_extendedMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => loans_view_extendedMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => loans_view_extendedSumOrderByAggregateInputSchema).optional()
}).strict();

export const loans_view_extendedScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.loans_view_extendedScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => loans_view_extendedScalarWhereWithAggregatesInputSchema),z.lazy(() => loans_view_extendedScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => loans_view_extendedScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loans_view_extendedScalarWhereWithAggregatesInputSchema),z.lazy(() => loans_view_extendedScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  zone_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  kabinet: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  shelf: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  loaner_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  loaner_username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  personel_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  personel_username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  recipient_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const products_viewWhereInputSchema: z.ZodType<Prisma.products_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => products_viewWhereInputSchema),z.lazy(() => products_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => products_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => products_viewWhereInputSchema),z.lazy(() => products_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Kategori: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const products_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.products_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Kategori: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Brand: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const products_viewWhereUniqueInputSchema: z.ZodType<Prisma.products_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => products_viewWhereInputSchema),z.lazy(() => products_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => products_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => products_viewWhereInputSchema),z.lazy(() => products_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Kategori: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const products_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.products_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Kategori: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Brand: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => products_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => products_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => products_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => products_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => products_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const products_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.products_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => products_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => products_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => products_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => products_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => products_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Kategori: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Brand: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const users_viewWhereInputSchema: z.ZodType<Prisma.users_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => users_viewWhereInputSchema),z.lazy(() => users_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => users_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => users_viewWhereInputSchema),z.lazy(() => users_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Brugernavn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const users_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.users_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brugernavn: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const users_viewWhereUniqueInputSchema: z.ZodType<Prisma.users_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => users_viewWhereInputSchema),z.lazy(() => users_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => users_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => users_viewWhereInputSchema),z.lazy(() => users_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Brugernavn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const users_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.users_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brugernavn: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => users_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => users_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => users_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => users_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => users_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const users_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.users_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => users_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => users_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => users_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => users_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => users_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Brugernavn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const product_status_viewWhereInputSchema: z.ZodType<Prisma.product_status_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => product_status_viewWhereInputSchema),z.lazy(() => product_status_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => product_status_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => product_status_viewWhereInputSchema),z.lazy(() => product_status_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const product_status_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.product_status_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_status_viewWhereUniqueInputSchema: z.ZodType<Prisma.product_status_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => product_status_viewWhereInputSchema),z.lazy(() => product_status_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => product_status_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => product_status_viewWhereInputSchema),z.lazy(() => product_status_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const product_status_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.product_status_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => product_status_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => product_status_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => product_status_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => product_status_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => product_status_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const product_status_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.product_status_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => product_status_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => product_status_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => product_status_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => product_status_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => product_status_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const items_without_statusWhereInputSchema: z.ZodType<Prisma.items_without_statusWhereInput> = z.object({
  AND: z.union([ z.lazy(() => items_without_statusWhereInputSchema),z.lazy(() => items_without_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_without_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_without_statusWhereInputSchema),z.lazy(() => items_without_statusWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const items_without_statusOrderByWithRelationInputSchema: z.ZodType<Prisma.items_without_statusOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const items_without_statusWhereUniqueInputSchema: z.ZodType<Prisma.items_without_statusWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => items_without_statusWhereInputSchema),z.lazy(() => items_without_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_without_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_without_statusWhereInputSchema),z.lazy(() => items_without_statusWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const items_without_statusOrderByWithAggregationInputSchema: z.ZodType<Prisma.items_without_statusOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => items_without_statusCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => items_without_statusAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => items_without_statusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => items_without_statusMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => items_without_statusSumOrderByAggregateInputSchema).optional()
}).strict();

export const items_without_statusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.items_without_statusScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => items_without_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => items_without_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_without_statusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_without_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => items_without_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const items_with_statusWhereInputSchema: z.ZodType<Prisma.items_with_statusWhereInput> = z.object({
  AND: z.union([ z.lazy(() => items_with_statusWhereInputSchema),z.lazy(() => items_with_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_with_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_with_statusWhereInputSchema),z.lazy(() => items_with_statusWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const items_with_statusOrderByWithRelationInputSchema: z.ZodType<Prisma.items_with_statusOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const items_with_statusWhereUniqueInputSchema: z.ZodType<Prisma.items_with_statusWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => items_with_statusWhereInputSchema),z.lazy(() => items_with_statusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_with_statusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_with_statusWhereInputSchema),z.lazy(() => items_with_statusWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const items_with_statusOrderByWithAggregationInputSchema: z.ZodType<Prisma.items_with_statusOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Stregkode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => items_with_statusCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => items_with_statusAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => items_with_statusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => items_with_statusMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => items_with_statusSumOrderByAggregateInputSchema).optional()
}).strict();

export const items_with_statusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.items_with_statusScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => items_with_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => items_with_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_with_statusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_with_statusScalarWhereWithAggregatesInputSchema),z.lazy(() => items_with_statusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Stregkode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Oprettet: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  Opdateret: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const zones_viewWhereInputSchema: z.ZodType<Prisma.zones_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => zones_viewWhereInputSchema),z.lazy(() => zones_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => zones_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zones_viewWhereInputSchema),z.lazy(() => zones_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Bygning: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Etage: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const zones_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.zones_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Bygning: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zones_viewWhereUniqueInputSchema: z.ZodType<Prisma.zones_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => zones_viewWhereInputSchema),z.lazy(() => zones_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => zones_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zones_viewWhereInputSchema),z.lazy(() => zones_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Bygning: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Etage: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const zones_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.zones_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Bygning: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => zones_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => zones_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => zones_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => zones_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => zones_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const zones_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.zones_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => zones_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => zones_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => zones_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zones_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => zones_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Bygning: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Etage: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const buildings_viewWhereInputSchema: z.ZodType<Prisma.buildings_viewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => buildings_viewWhereInputSchema),z.lazy(() => buildings_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => buildings_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => buildings_viewWhereInputSchema),z.lazy(() => buildings_viewWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const buildings_viewOrderByWithRelationInputSchema: z.ZodType<Prisma.buildings_viewOrderByWithRelationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const buildings_viewWhereUniqueInputSchema: z.ZodType<Prisma.buildings_viewWhereUniqueInput> = z.object({
  UUID: z.number().int()
})
.and(z.object({
  UUID: z.number().int().optional(),
  AND: z.union([ z.lazy(() => buildings_viewWhereInputSchema),z.lazy(() => buildings_viewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => buildings_viewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => buildings_viewWhereInputSchema),z.lazy(() => buildings_viewWhereInputSchema).array() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const buildings_viewOrderByWithAggregationInputSchema: z.ZodType<Prisma.buildings_viewOrderByWithAggregationInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => buildings_viewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => buildings_viewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => buildings_viewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => buildings_viewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => buildings_viewSumOrderByAggregateInputSchema).optional()
}).strict();

export const buildings_viewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.buildings_viewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => buildings_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => buildings_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => buildings_viewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => buildings_viewScalarWhereWithAggregatesInputSchema),z.lazy(() => buildings_viewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Navn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const brandsCreateInputSchema: z.ZodType<Prisma.brandsCreateInput> = z.object({
  name: z.string(),
  products: z.lazy(() => productsCreateNestedManyWithoutBrandsInputSchema).optional()
}).strict();

export const brandsUncheckedCreateInputSchema: z.ZodType<Prisma.brandsUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  products: z.lazy(() => productsUncheckedCreateNestedManyWithoutBrandsInputSchema).optional()
}).strict();

export const brandsUpdateInputSchema: z.ZodType<Prisma.brandsUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => productsUpdateManyWithoutBrandsNestedInputSchema).optional()
}).strict();

export const brandsUncheckedUpdateInputSchema: z.ZodType<Prisma.brandsUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => productsUncheckedUpdateManyWithoutBrandsNestedInputSchema).optional()
}).strict();

export const brandsCreateManyInputSchema: z.ZodType<Prisma.brandsCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const brandsUpdateManyMutationInputSchema: z.ZodType<Prisma.brandsUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const brandsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.brandsUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const buildingsCreateInputSchema: z.ZodType<Prisma.buildingsCreateInput> = z.object({
  name: z.string().optional().nullable(),
  zones: z.lazy(() => zonesCreateNestedManyWithoutBuildingsInputSchema).optional()
}).strict();

export const buildingsUncheckedCreateInputSchema: z.ZodType<Prisma.buildingsUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string().optional().nullable(),
  zones: z.lazy(() => zonesUncheckedCreateNestedManyWithoutBuildingsInputSchema).optional()
}).strict();

export const buildingsUpdateInputSchema: z.ZodType<Prisma.buildingsUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zones: z.lazy(() => zonesUpdateManyWithoutBuildingsNestedInputSchema).optional()
}).strict();

export const buildingsUncheckedUpdateInputSchema: z.ZodType<Prisma.buildingsUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zones: z.lazy(() => zonesUncheckedUpdateManyWithoutBuildingsNestedInputSchema).optional()
}).strict();

export const buildingsCreateManyInputSchema: z.ZodType<Prisma.buildingsCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string().optional().nullable()
}).strict();

export const buildingsUpdateManyMutationInputSchema: z.ZodType<Prisma.buildingsUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const buildingsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.buildingsUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const categoriesCreateInputSchema: z.ZodType<Prisma.categoriesCreateInput> = z.object({
  name: z.string(),
  products: z.lazy(() => productsCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const categoriesUncheckedCreateInputSchema: z.ZodType<Prisma.categoriesUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  products: z.lazy(() => productsUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const categoriesUpdateInputSchema: z.ZodType<Prisma.categoriesUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => productsUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const categoriesUncheckedUpdateInputSchema: z.ZodType<Prisma.categoriesUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => productsUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const categoriesCreateManyInputSchema: z.ZodType<Prisma.categoriesCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const categoriesUpdateManyMutationInputSchema: z.ZodType<Prisma.categoriesUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const categoriesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.categoriesUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const itemsCreateInputSchema: z.ZodType<Prisma.itemsCreateInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  products: z.lazy(() => productsCreateNestedOneWithoutItemsInputSchema),
  product_status: z.lazy(() => product_statusCreateNestedOneWithoutItemsInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsCreateNestedOneWithoutItemsInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsUncheckedCreateInputSchema: z.ZodType<Prisma.itemsUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsUpdateInputSchema: z.ZodType<Prisma.itemsUpdateInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => productsUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  product_status: z.lazy(() => product_statusUpdateOneWithoutItemsNestedInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsUpdateOneWithoutItemsNestedInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsCreateManyInputSchema: z.ZodType<Prisma.itemsCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable()
}).strict();

export const itemsUpdateManyMutationInputSchema: z.ZodType<Prisma.itemsUpdateManyMutationInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const itemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_in_loanCreateInputSchema: z.ZodType<Prisma.items_in_loanCreateInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional(),
  items: z.lazy(() => itemsCreateNestedOneWithoutItems_in_loanInputSchema),
  loans: z.lazy(() => loansCreateNestedOneWithoutItems_in_loanInputSchema)
}).strict();

export const items_in_loanUncheckedCreateInputSchema: z.ZodType<Prisma.items_in_loanUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  loan_id: z.number().int(),
  item_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional()
}).strict();

export const items_in_loanUpdateInputSchema: z.ZodType<Prisma.items_in_loanUpdateInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => itemsUpdateOneRequiredWithoutItems_in_loanNestedInputSchema).optional(),
  loans: z.lazy(() => loansUpdateOneRequiredWithoutItems_in_loanNestedInputSchema).optional()
}).strict();

export const items_in_loanUncheckedUpdateInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanCreateManyInputSchema: z.ZodType<Prisma.items_in_loanCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  loan_id: z.number().int(),
  item_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional()
}).strict();

export const items_in_loanUpdateManyMutationInputSchema: z.ZodType<Prisma.items_in_loanUpdateManyMutationInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanUncheckedUpdateManyInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const loansCreateInputSchema: z.ZodType<Prisma.loansCreateInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutLoansInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  zones: z.lazy(() => zonesCreateNestedOneWithoutLoansInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeCreateNestedOneWithoutLoansInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseCreateNestedOneWithoutLoansInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema)
}).strict();

export const loansUncheckedCreateInputSchema: z.ZodType<Prisma.loansUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema).optional()
}).strict();

export const loansUpdateInputSchema: z.ZodType<Prisma.loansUpdateInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutLoansNestedInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  zones: z.lazy(() => zonesUpdateOneWithoutLoansNestedInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeUpdateOneWithoutLoansNestedInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseUpdateOneWithoutLoansNestedInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateInputSchema: z.ZodType<Prisma.loansUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansCreateManyInputSchema: z.ZodType<Prisma.loansCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansUpdateManyMutationInputSchema: z.ZodType<Prisma.loansUpdateManyMutationInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const loansUncheckedUpdateManyInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const pickup_locationsCreateInputSchema: z.ZodType<Prisma.pickup_locationsCreateInput> = z.object({
  name: z.string()
}).strict();

export const pickup_locationsUncheckedCreateInputSchema: z.ZodType<Prisma.pickup_locationsUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const pickup_locationsUpdateInputSchema: z.ZodType<Prisma.pickup_locationsUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const pickup_locationsUncheckedUpdateInputSchema: z.ZodType<Prisma.pickup_locationsUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const pickup_locationsCreateManyInputSchema: z.ZodType<Prisma.pickup_locationsCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const pickup_locationsUpdateManyMutationInputSchema: z.ZodType<Prisma.pickup_locationsUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const pickup_locationsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.pickup_locationsUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_statusCreateInputSchema: z.ZodType<Prisma.product_statusCreateInput> = z.object({
  name: z.string(),
  items: z.lazy(() => itemsCreateNestedManyWithoutProduct_statusInputSchema).optional()
}).strict();

export const product_statusUncheckedCreateInputSchema: z.ZodType<Prisma.product_statusUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  items: z.lazy(() => itemsUncheckedCreateNestedManyWithoutProduct_statusInputSchema).optional()
}).strict();

export const product_statusUpdateInputSchema: z.ZodType<Prisma.product_statusUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => itemsUpdateManyWithoutProduct_statusNestedInputSchema).optional()
}).strict();

export const product_statusUncheckedUpdateInputSchema: z.ZodType<Prisma.product_statusUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => itemsUncheckedUpdateManyWithoutProduct_statusNestedInputSchema).optional()
}).strict();

export const product_statusCreateManyInputSchema: z.ZodType<Prisma.product_statusCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const product_statusUpdateManyMutationInputSchema: z.ZodType<Prisma.product_statusUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_statusUncheckedUpdateManyInputSchema: z.ZodType<Prisma.product_statusUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const productsCreateInputSchema: z.ZodType<Prisma.productsCreateInput> = z.object({
  name: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  items: z.lazy(() => itemsCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => categoriesCreateNestedOneWithoutProductsInputSchema),
  brands: z.lazy(() => brandsCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const productsUncheckedCreateInputSchema: z.ZodType<Prisma.productsUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  brand_id: z.number().int(),
  category_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  items: z.lazy(() => itemsUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const productsUpdateInputSchema: z.ZodType<Prisma.productsUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => itemsUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => categoriesUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  brands: z.lazy(() => brandsUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsUncheckedUpdateInputSchema: z.ZodType<Prisma.productsUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  category_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => itemsUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsCreateManyInputSchema: z.ZodType<Prisma.productsCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  brand_id: z.number().int(),
  category_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable()
}).strict();

export const productsUpdateManyMutationInputSchema: z.ZodType<Prisma.productsUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const productsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.productsUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  category_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const recipient_typeCreateInputSchema: z.ZodType<Prisma.recipient_typeCreateInput> = z.object({
  name: z.string(),
  loans: z.lazy(() => loansCreateNestedManyWithoutRecipient_typeInputSchema).optional()
}).strict();

export const recipient_typeUncheckedCreateInputSchema: z.ZodType<Prisma.recipient_typeUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  loans: z.lazy(() => loansUncheckedCreateNestedManyWithoutRecipient_typeInputSchema).optional()
}).strict();

export const recipient_typeUpdateInputSchema: z.ZodType<Prisma.recipient_typeUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUpdateManyWithoutRecipient_typeNestedInputSchema).optional()
}).strict();

export const recipient_typeUncheckedUpdateInputSchema: z.ZodType<Prisma.recipient_typeUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUncheckedUpdateManyWithoutRecipient_typeNestedInputSchema).optional()
}).strict();

export const recipient_typeCreateManyInputSchema: z.ZodType<Prisma.recipient_typeCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const recipient_typeUpdateManyMutationInputSchema: z.ZodType<Prisma.recipient_typeUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const recipient_typeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.recipient_typeUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const selfservice_caseCreateInputSchema: z.ZodType<Prisma.selfservice_caseCreateInput> = z.object({
  delivery_location_id: z.number().int().optional().nullable(),
  pickup_location_id: z.number().int().optional().nullable(),
  distribution_date: z.coerce.date(),
  estimated_time_consumption: z.coerce.date().optional().nullable(),
  loans: z.lazy(() => loansCreateNestedManyWithoutSelfservice_caseInputSchema).optional()
}).strict();

export const selfservice_caseUncheckedCreateInputSchema: z.ZodType<Prisma.selfservice_caseUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  delivery_location_id: z.number().int().optional().nullable(),
  pickup_location_id: z.number().int().optional().nullable(),
  distribution_date: z.coerce.date(),
  estimated_time_consumption: z.coerce.date().optional().nullable(),
  loans: z.lazy(() => loansUncheckedCreateNestedManyWithoutSelfservice_caseInputSchema).optional()
}).strict();

export const selfservice_caseUpdateInputSchema: z.ZodType<Prisma.selfservice_caseUpdateInput> = z.object({
  delivery_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pickup_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  distribution_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  estimated_time_consumption: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loans: z.lazy(() => loansUpdateManyWithoutSelfservice_caseNestedInputSchema).optional()
}).strict();

export const selfservice_caseUncheckedUpdateInputSchema: z.ZodType<Prisma.selfservice_caseUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pickup_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  distribution_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  estimated_time_consumption: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loans: z.lazy(() => loansUncheckedUpdateManyWithoutSelfservice_caseNestedInputSchema).optional()
}).strict();

export const selfservice_caseCreateManyInputSchema: z.ZodType<Prisma.selfservice_caseCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  delivery_location_id: z.number().int().optional().nullable(),
  pickup_location_id: z.number().int().optional().nullable(),
  distribution_date: z.coerce.date(),
  estimated_time_consumption: z.coerce.date().optional().nullable()
}).strict();

export const selfservice_caseUpdateManyMutationInputSchema: z.ZodType<Prisma.selfservice_caseUpdateManyMutationInput> = z.object({
  delivery_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pickup_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  distribution_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  estimated_time_consumption: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const selfservice_caseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.selfservice_caseUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pickup_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  distribution_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  estimated_time_consumption: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const storage_locationsCreateInputSchema: z.ZodType<Prisma.storage_locationsCreateInput> = z.object({
  zone_id: z.number().int(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  idle_since: z.coerce.date().optional().nullable(),
  img_name: z.string().optional().nullable(),
  date_updated: z.coerce.date().optional(),
  items: z.lazy(() => itemsCreateNestedManyWithoutStorage_locationsInputSchema).optional()
}).strict();

export const storage_locationsUncheckedCreateInputSchema: z.ZodType<Prisma.storage_locationsUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  zone_id: z.number().int(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  idle_since: z.coerce.date().optional().nullable(),
  img_name: z.string().optional().nullable(),
  date_updated: z.coerce.date().optional(),
  items: z.lazy(() => itemsUncheckedCreateNestedManyWithoutStorage_locationsInputSchema).optional()
}).strict();

export const storage_locationsUpdateInputSchema: z.ZodType<Prisma.storage_locationsUpdateInput> = z.object({
  zone_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idle_since: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => itemsUpdateManyWithoutStorage_locationsNestedInputSchema).optional()
}).strict();

export const storage_locationsUncheckedUpdateInputSchema: z.ZodType<Prisma.storage_locationsUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  zone_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idle_since: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => itemsUncheckedUpdateManyWithoutStorage_locationsNestedInputSchema).optional()
}).strict();

export const storage_locationsCreateManyInputSchema: z.ZodType<Prisma.storage_locationsCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  zone_id: z.number().int(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  idle_since: z.coerce.date().optional().nullable(),
  img_name: z.string().optional().nullable(),
  date_updated: z.coerce.date().optional()
}).strict();

export const storage_locationsUpdateManyMutationInputSchema: z.ZodType<Prisma.storage_locationsUpdateManyMutationInput> = z.object({
  zone_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idle_since: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const storage_locationsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.storage_locationsUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  zone_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idle_since: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersCreateInputSchema: z.ZodType<Prisma.usersCreateInput> = z.object({
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansCreateNestedManyWithoutUsers_loans_user_idTousersInputSchema).optional()
}).strict();

export const usersUncheckedCreateInputSchema: z.ZodType<Prisma.usersUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansUncheckedCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansUncheckedCreateNestedManyWithoutUsers_loans_user_idTousersInputSchema).optional()
}).strict();

export const usersUpdateInputSchema: z.ZodType<Prisma.usersUpdateInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansUpdateManyWithoutUsers_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateInputSchema: z.ZodType<Prisma.usersUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const usersCreateManyInputSchema: z.ZodType<Prisma.usersCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional()
}).strict();

export const usersUpdateManyMutationInputSchema: z.ZodType<Prisma.usersUpdateManyMutationInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.usersUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const zonesCreateInputSchema: z.ZodType<Prisma.zonesCreateInput> = z.object({
  name: z.string(),
  floor_level: z.number().int(),
  loans: z.lazy(() => loansCreateNestedManyWithoutZonesInputSchema).optional(),
  buildings: z.lazy(() => buildingsCreateNestedOneWithoutZonesInputSchema)
}).strict();

export const zonesUncheckedCreateInputSchema: z.ZodType<Prisma.zonesUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  building_id: z.number().int(),
  floor_level: z.number().int(),
  loans: z.lazy(() => loansUncheckedCreateNestedManyWithoutZonesInputSchema).optional()
}).strict();

export const zonesUpdateInputSchema: z.ZodType<Prisma.zonesUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUpdateManyWithoutZonesNestedInputSchema).optional(),
  buildings: z.lazy(() => buildingsUpdateOneRequiredWithoutZonesNestedInputSchema).optional()
}).strict();

export const zonesUncheckedUpdateInputSchema: z.ZodType<Prisma.zonesUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  building_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUncheckedUpdateManyWithoutZonesNestedInputSchema).optional()
}).strict();

export const zonesCreateManyInputSchema: z.ZodType<Prisma.zonesCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  building_id: z.number().int(),
  floor_level: z.number().int()
}).strict();

export const zonesUpdateManyMutationInputSchema: z.ZodType<Prisma.zonesUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const zonesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.zonesUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  building_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const feedbackCreateInputSchema: z.ZodType<Prisma.feedbackCreateInput> = z.object({
  title: z.string(),
  description: z.string(),
  date_created: z.coerce.date().optional()
}).strict();

export const feedbackUncheckedCreateInputSchema: z.ZodType<Prisma.feedbackUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  date_created: z.coerce.date().optional()
}).strict();

export const feedbackUpdateInputSchema: z.ZodType<Prisma.feedbackUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const feedbackUncheckedUpdateInputSchema: z.ZodType<Prisma.feedbackUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const feedbackCreateManyInputSchema: z.ZodType<Prisma.feedbackCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  date_created: z.coerce.date().optional()
}).strict();

export const feedbackUpdateManyMutationInputSchema: z.ZodType<Prisma.feedbackUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const feedbackUncheckedUpdateManyInputSchema: z.ZodType<Prisma.feedbackUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const available_products_viewCreateInputSchema: z.ZodType<Prisma.available_products_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Brand: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable()
}).strict();

export const available_products_viewUncheckedCreateInputSchema: z.ZodType<Prisma.available_products_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Brand: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable()
}).strict();

export const available_products_viewUpdateInputSchema: z.ZodType<Prisma.available_products_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const available_products_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.available_products_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const available_products_viewCreateManyInputSchema: z.ZodType<Prisma.available_products_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Brand: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable()
}).strict();

export const available_products_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.available_products_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const available_products_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.available_products_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const brands_viewCreateInputSchema: z.ZodType<Prisma.brands_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const brands_viewUncheckedCreateInputSchema: z.ZodType<Prisma.brands_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const brands_viewUpdateInputSchema: z.ZodType<Prisma.brands_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const brands_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.brands_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const brands_viewCreateManyInputSchema: z.ZodType<Prisma.brands_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const brands_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.brands_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const brands_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.brands_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const categories_viewCreateInputSchema: z.ZodType<Prisma.categories_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const categories_viewUncheckedCreateInputSchema: z.ZodType<Prisma.categories_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const categories_viewUpdateInputSchema: z.ZodType<Prisma.categories_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const categories_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.categories_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const categories_viewCreateManyInputSchema: z.ZodType<Prisma.categories_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const categories_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.categories_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const categories_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.categories_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_from_loansCreateInputSchema: z.ZodType<Prisma.items_from_loansCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Oprettet: z.coerce.date().optional(),
  Produkt: z.string(),
  Med_taske: z.boolean().optional(),
  Med_Laas: z.boolean().optional(),
  Stregkode: z.string().optional().nullable(),
  loan_id: z.number().int(),
  Returneret: z.coerce.date().optional().nullable()
}).strict();

export const items_from_loansUncheckedCreateInputSchema: z.ZodType<Prisma.items_from_loansUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Oprettet: z.coerce.date().optional(),
  Produkt: z.string(),
  Med_taske: z.boolean().optional(),
  Med_Laas: z.boolean().optional(),
  Stregkode: z.string().optional().nullable(),
  loan_id: z.number().int(),
  Returneret: z.coerce.date().optional().nullable()
}).strict();

export const items_from_loansUpdateInputSchema: z.ZodType<Prisma.items_from_loansUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Produkt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Med_taske: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Med_Laas: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_from_loansUncheckedUpdateInputSchema: z.ZodType<Prisma.items_from_loansUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Produkt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Med_taske: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Med_Laas: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_from_loansCreateManyInputSchema: z.ZodType<Prisma.items_from_loansCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Oprettet: z.coerce.date().optional(),
  Produkt: z.string(),
  Med_taske: z.boolean().optional(),
  Med_Laas: z.boolean().optional(),
  Stregkode: z.string().optional().nullable(),
  loan_id: z.number().int(),
  Returneret: z.coerce.date().optional().nullable()
}).strict();

export const items_from_loansUpdateManyMutationInputSchema: z.ZodType<Prisma.items_from_loansUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Produkt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Med_taske: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Med_Laas: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_from_loansUncheckedUpdateManyInputSchema: z.ZodType<Prisma.items_from_loansUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Produkt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Med_taske: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Med_Laas: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_viewCreateInputSchema: z.ZodType<Prisma.items_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Status: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_viewUncheckedCreateInputSchema: z.ZodType<Prisma.items_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Status: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_viewUpdateInputSchema: z.ZodType<Prisma.items_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.items_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_viewCreateManyInputSchema: z.ZodType<Prisma.items_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Status: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.items_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.items_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_viewCreateInputSchema: z.ZodType<Prisma.loans_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional(),
  Laaner: z.string().optional().nullable(),
  Udlaaner: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional(),
  Returneret: z.coerce.date().optional().nullable(),
  Recipent: z.string().optional().nullable(),
  Laanetid: z.string().optional().nullable(),
  Returneringsdato: z.coerce.date().optional().nullable()
}).strict();

export const loans_viewUncheckedCreateInputSchema: z.ZodType<Prisma.loans_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional(),
  Laaner: z.string().optional().nullable(),
  Udlaaner: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional(),
  Returneret: z.coerce.date().optional().nullable(),
  Recipent: z.string().optional().nullable(),
  Laanetid: z.string().optional().nullable(),
  Returneringsdato: z.coerce.date().optional().nullable()
}).strict();

export const loans_viewUpdateInputSchema: z.ZodType<Prisma.loans_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Laaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Udlaaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Recipent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Laanetid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Returneringsdato: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.loans_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Laaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Udlaaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Recipent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Laanetid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Returneringsdato: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_viewCreateManyInputSchema: z.ZodType<Prisma.loans_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional(),
  Laaner: z.string().optional().nullable(),
  Udlaaner: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional(),
  Returneret: z.coerce.date().optional().nullable(),
  Recipent: z.string().optional().nullable(),
  Laanetid: z.string().optional().nullable(),
  Returneringsdato: z.coerce.date().optional().nullable()
}).strict();

export const loans_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.loans_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Laaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Udlaaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Recipent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Laanetid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Returneringsdato: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.loans_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Laaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Udlaaner: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Returneret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Recipent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Laanetid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Returneringsdato: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_view_extendedCreateInputSchema: z.ZodType<Prisma.loans_view_extendedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  location_of_use_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  zone_id: z.number().int().optional().nullable(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  loaner_id: z.number().int().optional().nullable(),
  loaner_username: z.string().optional().nullable(),
  personel_id: z.number().int().optional().nullable(),
  personel_username: z.string().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  recipient_name: z.string().optional().nullable()
}).strict();

export const loans_view_extendedUncheckedCreateInputSchema: z.ZodType<Prisma.loans_view_extendedUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  location_of_use_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  zone_id: z.number().int().optional().nullable(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  loaner_id: z.number().int().optional().nullable(),
  loaner_username: z.string().optional().nullable(),
  personel_id: z.number().int().optional().nullable(),
  personel_username: z.string().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  recipient_name: z.string().optional().nullable()
}).strict();

export const loans_view_extendedUpdateInputSchema: z.ZodType<Prisma.loans_view_extendedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zone_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_view_extendedUncheckedUpdateInputSchema: z.ZodType<Prisma.loans_view_extendedUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zone_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_view_extendedCreateManyInputSchema: z.ZodType<Prisma.loans_view_extendedCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  location_of_use_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  zone_id: z.number().int().optional().nullable(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  loaner_id: z.number().int().optional().nullable(),
  loaner_username: z.string().optional().nullable(),
  personel_id: z.number().int().optional().nullable(),
  personel_username: z.string().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  recipient_name: z.string().optional().nullable()
}).strict();

export const loans_view_extendedUpdateManyMutationInputSchema: z.ZodType<Prisma.loans_view_extendedUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zone_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loans_view_extendedUncheckedUpdateManyInputSchema: z.ZodType<Prisma.loans_view_extendedUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zone_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loaner_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  personel_username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const products_viewCreateInputSchema: z.ZodType<Prisma.products_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string(),
  Kategori: z.string().optional().nullable(),
  Brand: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional()
}).strict();

export const products_viewUncheckedCreateInputSchema: z.ZodType<Prisma.products_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string(),
  Kategori: z.string().optional().nullable(),
  Brand: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional()
}).strict();

export const products_viewUpdateInputSchema: z.ZodType<Prisma.products_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Kategori: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const products_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.products_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Kategori: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const products_viewCreateManyInputSchema: z.ZodType<Prisma.products_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string(),
  Kategori: z.string().optional().nullable(),
  Brand: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional()
}).strict();

export const products_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.products_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Kategori: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const products_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.products_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Kategori: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const users_viewCreateInputSchema: z.ZodType<Prisma.users_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional(),
  Brugernavn: z.string(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional()
}).strict();

export const users_viewUncheckedCreateInputSchema: z.ZodType<Prisma.users_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional(),
  Brugernavn: z.string(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional()
}).strict();

export const users_viewUpdateInputSchema: z.ZodType<Prisma.users_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Brugernavn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const users_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.users_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Brugernavn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const users_viewCreateManyInputSchema: z.ZodType<Prisma.users_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional(),
  Brugernavn: z.string(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional()
}).strict();

export const users_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.users_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Brugernavn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const users_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.users_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Brugernavn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_status_viewCreateInputSchema: z.ZodType<Prisma.product_status_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const product_status_viewUncheckedCreateInputSchema: z.ZodType<Prisma.product_status_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const product_status_viewUpdateInputSchema: z.ZodType<Prisma.product_status_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_status_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.product_status_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_status_viewCreateManyInputSchema: z.ZodType<Prisma.product_status_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string()
}).strict();

export const product_status_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.product_status_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_status_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.product_status_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_without_statusCreateInputSchema: z.ZodType<Prisma.items_without_statusCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_without_statusUncheckedCreateInputSchema: z.ZodType<Prisma.items_without_statusUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_without_statusUpdateInputSchema: z.ZodType<Prisma.items_without_statusUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_without_statusUncheckedUpdateInputSchema: z.ZodType<Prisma.items_without_statusUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_without_statusCreateManyInputSchema: z.ZodType<Prisma.items_without_statusCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_without_statusUpdateManyMutationInputSchema: z.ZodType<Prisma.items_without_statusUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_without_statusUncheckedUpdateManyInputSchema: z.ZodType<Prisma.items_without_statusUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_with_statusCreateInputSchema: z.ZodType<Prisma.items_with_statusCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Status: z.string(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_with_statusUncheckedCreateInputSchema: z.ZodType<Prisma.items_with_statusUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Status: z.string(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_with_statusUpdateInputSchema: z.ZodType<Prisma.items_with_statusUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_with_statusUncheckedUpdateInputSchema: z.ZodType<Prisma.items_with_statusUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_with_statusCreateManyInputSchema: z.ZodType<Prisma.items_with_statusCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable(),
  Stregkode: z.string().optional().nullable(),
  Status: z.string(),
  Oprettet: z.coerce.date().optional(),
  Opdateret: z.coerce.date().optional().nullable()
}).strict();

export const items_with_statusUpdateManyMutationInputSchema: z.ZodType<Prisma.items_with_statusUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_with_statusUncheckedUpdateManyInputSchema: z.ZodType<Prisma.items_with_statusUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Stregkode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Oprettet: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Opdateret: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const zones_viewCreateInputSchema: z.ZodType<Prisma.zones_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string(),
  Bygning: z.string().optional().nullable(),
  Etage: z.number().int()
}).strict();

export const zones_viewUncheckedCreateInputSchema: z.ZodType<Prisma.zones_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string(),
  Bygning: z.string().optional().nullable(),
  Etage: z.number().int()
}).strict();

export const zones_viewUpdateInputSchema: z.ZodType<Prisma.zones_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Bygning: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Etage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const zones_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.zones_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Bygning: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Etage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const zones_viewCreateManyInputSchema: z.ZodType<Prisma.zones_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string(),
  Bygning: z.string().optional().nullable(),
  Etage: z.number().int()
}).strict();

export const zones_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.zones_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Bygning: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Etage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const zones_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.zones_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Bygning: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Etage: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const buildings_viewCreateInputSchema: z.ZodType<Prisma.buildings_viewCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable()
}).strict();

export const buildings_viewUncheckedCreateInputSchema: z.ZodType<Prisma.buildings_viewUncheckedCreateInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable()
}).strict();

export const buildings_viewUpdateInputSchema: z.ZodType<Prisma.buildings_viewUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const buildings_viewUncheckedUpdateInputSchema: z.ZodType<Prisma.buildings_viewUncheckedUpdateInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const buildings_viewCreateManyInputSchema: z.ZodType<Prisma.buildings_viewCreateManyInput> = z.object({
  UUID: z.number().int().optional(),
  Navn: z.string().optional().nullable()
}).strict();

export const buildings_viewUpdateManyMutationInputSchema: z.ZodType<Prisma.buildings_viewUpdateManyMutationInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const buildings_viewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.buildings_viewUncheckedUpdateManyInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Navn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const ProductsListRelationFilterSchema: z.ZodType<Prisma.ProductsListRelationFilter> = z.object({
  every: z.lazy(() => productsWhereInputSchema).optional(),
  some: z.lazy(() => productsWhereInputSchema).optional(),
  none: z.lazy(() => productsWhereInputSchema).optional()
}).strict();

export const productsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.productsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brandsCountOrderByAggregateInputSchema: z.ZodType<Prisma.brandsCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brandsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.brandsAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brandsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.brandsMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brandsMinOrderByAggregateInputSchema: z.ZodType<Prisma.brandsMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brandsSumOrderByAggregateInputSchema: z.ZodType<Prisma.brandsSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ZonesListRelationFilterSchema: z.ZodType<Prisma.ZonesListRelationFilter> = z.object({
  every: z.lazy(() => zonesWhereInputSchema).optional(),
  some: z.lazy(() => zonesWhereInputSchema).optional(),
  none: z.lazy(() => zonesWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const zonesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.zonesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildingsCountOrderByAggregateInputSchema: z.ZodType<Prisma.buildingsCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildingsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.buildingsAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildingsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.buildingsMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.buildingsMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.buildingsSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const categoriesCountOrderByAggregateInputSchema: z.ZodType<Prisma.categoriesCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categoriesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.categoriesAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categoriesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.categoriesMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categoriesMinOrderByAggregateInputSchema: z.ZodType<Prisma.categoriesMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categoriesSumOrderByAggregateInputSchema: z.ZodType<Prisma.categoriesSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductsRelationFilterSchema: z.ZodType<Prisma.ProductsRelationFilter> = z.object({
  is: z.lazy(() => productsWhereInputSchema).optional(),
  isNot: z.lazy(() => productsWhereInputSchema).optional()
}).strict();

export const Product_statusNullableRelationFilterSchema: z.ZodType<Prisma.Product_statusNullableRelationFilter> = z.object({
  is: z.lazy(() => product_statusWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => product_statusWhereInputSchema).optional().nullable()
}).strict();

export const Storage_locationsNullableRelationFilterSchema: z.ZodType<Prisma.Storage_locationsNullableRelationFilter> = z.object({
  is: z.lazy(() => storage_locationsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => storage_locationsWhereInputSchema).optional().nullable()
}).strict();

export const Items_in_loanListRelationFilterSchema: z.ZodType<Prisma.Items_in_loanListRelationFilter> = z.object({
  every: z.lazy(() => items_in_loanWhereInputSchema).optional(),
  some: z.lazy(() => items_in_loanWhereInputSchema).optional(),
  none: z.lazy(() => items_in_loanWhereInputSchema).optional()
}).strict();

export const items_in_loanOrderByRelationAggregateInputSchema: z.ZodType<Prisma.items_in_loanOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const itemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.itemsCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  storage_location_id: z.lazy(() => SortOrderSchema).optional(),
  product_status_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  barcode_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const itemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.itemsAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  storage_location_id: z.lazy(() => SortOrderSchema).optional(),
  product_status_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  barcode_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const itemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.itemsMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  storage_location_id: z.lazy(() => SortOrderSchema).optional(),
  product_status_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  barcode_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const itemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.itemsMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  storage_location_id: z.lazy(() => SortOrderSchema).optional(),
  product_status_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  barcode_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const itemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.itemsSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  storage_location_id: z.lazy(() => SortOrderSchema).optional(),
  product_status_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  barcode_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const ItemsRelationFilterSchema: z.ZodType<Prisma.ItemsRelationFilter> = z.object({
  is: z.lazy(() => itemsWhereInputSchema).optional(),
  isNot: z.lazy(() => itemsWhereInputSchema).optional()
}).strict();

export const LoansRelationFilterSchema: z.ZodType<Prisma.LoansRelationFilter> = z.object({
  is: z.lazy(() => loansWhereInputSchema).optional(),
  isNot: z.lazy(() => loansWhereInputSchema).optional()
}).strict();

export const items_in_loanCountOrderByAggregateInputSchema: z.ZodType<Prisma.items_in_loanCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_returned: z.lazy(() => SortOrderSchema).optional(),
  withBag: z.lazy(() => SortOrderSchema).optional(),
  withLock: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_in_loanAvgOrderByAggregateInputSchema: z.ZodType<Prisma.items_in_loanAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_in_loanMaxOrderByAggregateInputSchema: z.ZodType<Prisma.items_in_loanMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_returned: z.lazy(() => SortOrderSchema).optional(),
  withBag: z.lazy(() => SortOrderSchema).optional(),
  withLock: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_in_loanMinOrderByAggregateInputSchema: z.ZodType<Prisma.items_in_loanMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_returned: z.lazy(() => SortOrderSchema).optional(),
  withBag: z.lazy(() => SortOrderSchema).optional(),
  withLock: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_in_loanSumOrderByAggregateInputSchema: z.ZodType<Prisma.items_in_loanSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const UsersNullableRelationFilterSchema: z.ZodType<Prisma.UsersNullableRelationFilter> = z.object({
  is: z.lazy(() => usersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => usersWhereInputSchema).optional().nullable()
}).strict();

export const ZonesNullableRelationFilterSchema: z.ZodType<Prisma.ZonesNullableRelationFilter> = z.object({
  is: z.lazy(() => zonesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => zonesWhereInputSchema).optional().nullable()
}).strict();

export const Recipient_typeNullableRelationFilterSchema: z.ZodType<Prisma.Recipient_typeNullableRelationFilter> = z.object({
  is: z.lazy(() => recipient_typeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => recipient_typeWhereInputSchema).optional().nullable()
}).strict();

export const Selfservice_caseNullableRelationFilterSchema: z.ZodType<Prisma.Selfservice_caseNullableRelationFilter> = z.object({
  is: z.lazy(() => selfservice_caseWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => selfservice_caseWhereInputSchema).optional().nullable()
}).strict();

export const UsersRelationFilterSchema: z.ZodType<Prisma.UsersRelationFilter> = z.object({
  is: z.lazy(() => usersWhereInputSchema).optional(),
  isNot: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const loansCountOrderByAggregateInputSchema: z.ZodType<Prisma.loansCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  date_of_return: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  mail_sent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loansAvgOrderByAggregateInputSchema: z.ZodType<Prisma.loansAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loansMaxOrderByAggregateInputSchema: z.ZodType<Prisma.loansMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  date_of_return: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  mail_sent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loansMinOrderByAggregateInputSchema: z.ZodType<Prisma.loansMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  date_of_return: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  mail_sent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loansSumOrderByAggregateInputSchema: z.ZodType<Prisma.loansSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  helpdesk_personel_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const pickup_locationsCountOrderByAggregateInputSchema: z.ZodType<Prisma.pickup_locationsCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const pickup_locationsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.pickup_locationsAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const pickup_locationsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.pickup_locationsMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const pickup_locationsMinOrderByAggregateInputSchema: z.ZodType<Prisma.pickup_locationsMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const pickup_locationsSumOrderByAggregateInputSchema: z.ZodType<Prisma.pickup_locationsSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsListRelationFilterSchema: z.ZodType<Prisma.ItemsListRelationFilter> = z.object({
  every: z.lazy(() => itemsWhereInputSchema).optional(),
  some: z.lazy(() => itemsWhereInputSchema).optional(),
  none: z.lazy(() => itemsWhereInputSchema).optional()
}).strict();

export const itemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.itemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_statusCountOrderByAggregateInputSchema: z.ZodType<Prisma.product_statusCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_statusAvgOrderByAggregateInputSchema: z.ZodType<Prisma.product_statusAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_statusMaxOrderByAggregateInputSchema: z.ZodType<Prisma.product_statusMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_statusMinOrderByAggregateInputSchema: z.ZodType<Prisma.product_statusMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_statusSumOrderByAggregateInputSchema: z.ZodType<Prisma.product_statusSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesRelationFilterSchema: z.ZodType<Prisma.CategoriesRelationFilter> = z.object({
  is: z.lazy(() => categoriesWhereInputSchema).optional(),
  isNot: z.lazy(() => categoriesWhereInputSchema).optional()
}).strict();

export const BrandsRelationFilterSchema: z.ZodType<Prisma.BrandsRelationFilter> = z.object({
  is: z.lazy(() => brandsWhereInputSchema).optional(),
  isNot: z.lazy(() => brandsWhereInputSchema).optional()
}).strict();

export const productsCountOrderByAggregateInputSchema: z.ZodType<Prisma.productsCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  product_id_prefix: z.lazy(() => SortOrderSchema).optional(),
  image_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const productsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.productsAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const productsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.productsMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  product_id_prefix: z.lazy(() => SortOrderSchema).optional(),
  image_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const productsMinOrderByAggregateInputSchema: z.ZodType<Prisma.productsMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional(),
  product_id_prefix: z.lazy(() => SortOrderSchema).optional(),
  image_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const productsSumOrderByAggregateInputSchema: z.ZodType<Prisma.productsSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  brand_id: z.lazy(() => SortOrderSchema).optional(),
  category_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoansListRelationFilterSchema: z.ZodType<Prisma.LoansListRelationFilter> = z.object({
  every: z.lazy(() => loansWhereInputSchema).optional(),
  some: z.lazy(() => loansWhereInputSchema).optional(),
  none: z.lazy(() => loansWhereInputSchema).optional()
}).strict();

export const loansOrderByRelationAggregateInputSchema: z.ZodType<Prisma.loansOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const recipient_typeCountOrderByAggregateInputSchema: z.ZodType<Prisma.recipient_typeCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const recipient_typeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.recipient_typeAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const recipient_typeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.recipient_typeMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const recipient_typeMinOrderByAggregateInputSchema: z.ZodType<Prisma.recipient_typeMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const recipient_typeSumOrderByAggregateInputSchema: z.ZodType<Prisma.recipient_typeSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const selfservice_caseCountOrderByAggregateInputSchema: z.ZodType<Prisma.selfservice_caseCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.lazy(() => SortOrderSchema).optional(),
  pickup_location_id: z.lazy(() => SortOrderSchema).optional(),
  distribution_date: z.lazy(() => SortOrderSchema).optional(),
  estimated_time_consumption: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const selfservice_caseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.selfservice_caseAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.lazy(() => SortOrderSchema).optional(),
  pickup_location_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const selfservice_caseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.selfservice_caseMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.lazy(() => SortOrderSchema).optional(),
  pickup_location_id: z.lazy(() => SortOrderSchema).optional(),
  distribution_date: z.lazy(() => SortOrderSchema).optional(),
  estimated_time_consumption: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const selfservice_caseMinOrderByAggregateInputSchema: z.ZodType<Prisma.selfservice_caseMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.lazy(() => SortOrderSchema).optional(),
  pickup_location_id: z.lazy(() => SortOrderSchema).optional(),
  distribution_date: z.lazy(() => SortOrderSchema).optional(),
  estimated_time_consumption: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const selfservice_caseSumOrderByAggregateInputSchema: z.ZodType<Prisma.selfservice_caseSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  delivery_location_id: z.lazy(() => SortOrderSchema).optional(),
  pickup_location_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const storage_locationsCountOrderByAggregateInputSchema: z.ZodType<Prisma.storage_locationsCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.lazy(() => SortOrderSchema).optional(),
  shelf: z.lazy(() => SortOrderSchema).optional(),
  idle_since: z.lazy(() => SortOrderSchema).optional(),
  img_name: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const storage_locationsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.storage_locationsAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const storage_locationsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.storage_locationsMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.lazy(() => SortOrderSchema).optional(),
  shelf: z.lazy(() => SortOrderSchema).optional(),
  idle_since: z.lazy(() => SortOrderSchema).optional(),
  img_name: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const storage_locationsMinOrderByAggregateInputSchema: z.ZodType<Prisma.storage_locationsMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.lazy(() => SortOrderSchema).optional(),
  shelf: z.lazy(() => SortOrderSchema).optional(),
  idle_since: z.lazy(() => SortOrderSchema).optional(),
  img_name: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const storage_locationsSumOrderByAggregateInputSchema: z.ZodType<Prisma.storage_locationsSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.usersCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.usersAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.usersMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersMinOrderByAggregateInputSchema: z.ZodType<Prisma.usersMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional(),
  date_updated: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersSumOrderByAggregateInputSchema: z.ZodType<Prisma.usersSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingsRelationFilterSchema: z.ZodType<Prisma.BuildingsRelationFilter> = z.object({
  is: z.lazy(() => buildingsWhereInputSchema).optional(),
  isNot: z.lazy(() => buildingsWhereInputSchema).optional()
}).strict();

export const zonesCountOrderByAggregateInputSchema: z.ZodType<Prisma.zonesCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zonesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.zonesAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zonesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.zonesMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zonesMinOrderByAggregateInputSchema: z.ZodType<Prisma.zonesMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zonesSumOrderByAggregateInputSchema: z.ZodType<Prisma.zonesSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  building_id: z.lazy(() => SortOrderSchema).optional(),
  floor_level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const feedbackCountOrderByAggregateInputSchema: z.ZodType<Prisma.feedbackCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const feedbackAvgOrderByAggregateInputSchema: z.ZodType<Prisma.feedbackAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const feedbackMaxOrderByAggregateInputSchema: z.ZodType<Prisma.feedbackMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const feedbackMinOrderByAggregateInputSchema: z.ZodType<Prisma.feedbackMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date_created: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const feedbackSumOrderByAggregateInputSchema: z.ZodType<Prisma.feedbackSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const available_products_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.available_products_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brand: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const available_products_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.available_products_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const available_products_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.available_products_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brand: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const available_products_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.available_products_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brand: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const available_products_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.available_products_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brands_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.brands_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brands_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.brands_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brands_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.brands_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brands_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.brands_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const brands_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.brands_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categories_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.categories_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categories_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.categories_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categories_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.categories_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categories_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.categories_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const categories_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.categories_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_from_loansCountOrderByAggregateInputSchema: z.ZodType<Prisma.items_from_loansCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Produkt: z.lazy(() => SortOrderSchema).optional(),
  Med_taske: z.lazy(() => SortOrderSchema).optional(),
  Med_Laas: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_from_loansAvgOrderByAggregateInputSchema: z.ZodType<Prisma.items_from_loansAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_from_loansMaxOrderByAggregateInputSchema: z.ZodType<Prisma.items_from_loansMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Produkt: z.lazy(() => SortOrderSchema).optional(),
  Med_taske: z.lazy(() => SortOrderSchema).optional(),
  Med_Laas: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_from_loansMinOrderByAggregateInputSchema: z.ZodType<Prisma.items_from_loansMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Produkt: z.lazy(() => SortOrderSchema).optional(),
  Med_taske: z.lazy(() => SortOrderSchema).optional(),
  Med_Laas: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_from_loansSumOrderByAggregateInputSchema: z.ZodType<Prisma.items_from_loansSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  loan_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.items_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.items_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.items_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.items_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.items_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.loans_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Laaner: z.lazy(() => SortOrderSchema).optional(),
  Udlaaner: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.lazy(() => SortOrderSchema).optional(),
  Recipent: z.lazy(() => SortOrderSchema).optional(),
  Laanetid: z.lazy(() => SortOrderSchema).optional(),
  Returneringsdato: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.loans_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.loans_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Laaner: z.lazy(() => SortOrderSchema).optional(),
  Udlaaner: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.lazy(() => SortOrderSchema).optional(),
  Recipent: z.lazy(() => SortOrderSchema).optional(),
  Laanetid: z.lazy(() => SortOrderSchema).optional(),
  Returneringsdato: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.loans_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Laaner: z.lazy(() => SortOrderSchema).optional(),
  Udlaaner: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional(),
  Returneret: z.lazy(() => SortOrderSchema).optional(),
  Recipent: z.lazy(() => SortOrderSchema).optional(),
  Laanetid: z.lazy(() => SortOrderSchema).optional(),
  Returneringsdato: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.loans_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_view_extendedCountOrderByAggregateInputSchema: z.ZodType<Prisma.loans_view_extendedCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.lazy(() => SortOrderSchema).optional(),
  shelf: z.lazy(() => SortOrderSchema).optional(),
  loaner_id: z.lazy(() => SortOrderSchema).optional(),
  loaner_username: z.lazy(() => SortOrderSchema).optional(),
  personel_id: z.lazy(() => SortOrderSchema).optional(),
  personel_username: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_view_extendedAvgOrderByAggregateInputSchema: z.ZodType<Prisma.loans_view_extendedAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  loaner_id: z.lazy(() => SortOrderSchema).optional(),
  personel_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_view_extendedMaxOrderByAggregateInputSchema: z.ZodType<Prisma.loans_view_extendedMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.lazy(() => SortOrderSchema).optional(),
  shelf: z.lazy(() => SortOrderSchema).optional(),
  loaner_id: z.lazy(() => SortOrderSchema).optional(),
  loaner_username: z.lazy(() => SortOrderSchema).optional(),
  personel_id: z.lazy(() => SortOrderSchema).optional(),
  personel_username: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_view_extendedMinOrderByAggregateInputSchema: z.ZodType<Prisma.loans_view_extendedMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  kabinet: z.lazy(() => SortOrderSchema).optional(),
  shelf: z.lazy(() => SortOrderSchema).optional(),
  loaner_id: z.lazy(() => SortOrderSchema).optional(),
  loaner_username: z.lazy(() => SortOrderSchema).optional(),
  personel_id: z.lazy(() => SortOrderSchema).optional(),
  personel_username: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const loans_view_extendedSumOrderByAggregateInputSchema: z.ZodType<Prisma.loans_view_extendedSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  location_of_use_id: z.lazy(() => SortOrderSchema).optional(),
  selfservice_case_id: z.lazy(() => SortOrderSchema).optional(),
  loan_length: z.lazy(() => SortOrderSchema).optional(),
  zone_id: z.lazy(() => SortOrderSchema).optional(),
  loaner_id: z.lazy(() => SortOrderSchema).optional(),
  personel_id: z.lazy(() => SortOrderSchema).optional(),
  recipient_type_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const products_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.products_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Kategori: z.lazy(() => SortOrderSchema).optional(),
  Brand: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const products_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.products_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const products_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.products_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Kategori: z.lazy(() => SortOrderSchema).optional(),
  Brand: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const products_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.products_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Kategori: z.lazy(() => SortOrderSchema).optional(),
  Brand: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const products_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.products_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const users_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.users_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brugernavn: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const users_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.users_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const users_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.users_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brugernavn: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const users_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.users_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Brugernavn: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const users_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.users_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_status_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.product_status_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_status_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.product_status_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_status_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.product_status_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_status_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.product_status_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const product_status_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.product_status_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_without_statusCountOrderByAggregateInputSchema: z.ZodType<Prisma.items_without_statusCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_without_statusAvgOrderByAggregateInputSchema: z.ZodType<Prisma.items_without_statusAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_without_statusMaxOrderByAggregateInputSchema: z.ZodType<Prisma.items_without_statusMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_without_statusMinOrderByAggregateInputSchema: z.ZodType<Prisma.items_without_statusMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_without_statusSumOrderByAggregateInputSchema: z.ZodType<Prisma.items_without_statusSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_with_statusCountOrderByAggregateInputSchema: z.ZodType<Prisma.items_with_statusCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_with_statusAvgOrderByAggregateInputSchema: z.ZodType<Prisma.items_with_statusAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_with_statusMaxOrderByAggregateInputSchema: z.ZodType<Prisma.items_with_statusMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_with_statusMinOrderByAggregateInputSchema: z.ZodType<Prisma.items_with_statusMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Stregkode: z.lazy(() => SortOrderSchema).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  Oprettet: z.lazy(() => SortOrderSchema).optional(),
  Opdateret: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const items_with_statusSumOrderByAggregateInputSchema: z.ZodType<Prisma.items_with_statusSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zones_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.zones_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Bygning: z.lazy(() => SortOrderSchema).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zones_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.zones_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zones_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.zones_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Bygning: z.lazy(() => SortOrderSchema).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zones_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.zones_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional(),
  Bygning: z.lazy(() => SortOrderSchema).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const zones_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.zones_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Etage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildings_viewCountOrderByAggregateInputSchema: z.ZodType<Prisma.buildings_viewCountOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildings_viewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.buildings_viewAvgOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildings_viewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.buildings_viewMaxOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildings_viewMinOrderByAggregateInputSchema: z.ZodType<Prisma.buildings_viewMinOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional(),
  Navn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const buildings_viewSumOrderByAggregateInputSchema: z.ZodType<Prisma.buildings_viewSumOrderByAggregateInput> = z.object({
  UUID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const productsCreateNestedManyWithoutBrandsInputSchema: z.ZodType<Prisma.productsCreateNestedManyWithoutBrandsInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutBrandsInputSchema),z.lazy(() => productsCreateWithoutBrandsInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema),z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyBrandsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const productsUncheckedCreateNestedManyWithoutBrandsInputSchema: z.ZodType<Prisma.productsUncheckedCreateNestedManyWithoutBrandsInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutBrandsInputSchema),z.lazy(() => productsCreateWithoutBrandsInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema),z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyBrandsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const productsUpdateManyWithoutBrandsNestedInputSchema: z.ZodType<Prisma.productsUpdateManyWithoutBrandsNestedInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutBrandsInputSchema),z.lazy(() => productsCreateWithoutBrandsInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema),z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => productsUpsertWithWhereUniqueWithoutBrandsInputSchema),z.lazy(() => productsUpsertWithWhereUniqueWithoutBrandsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyBrandsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => productsUpdateWithWhereUniqueWithoutBrandsInputSchema),z.lazy(() => productsUpdateWithWhereUniqueWithoutBrandsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => productsUpdateManyWithWhereWithoutBrandsInputSchema),z.lazy(() => productsUpdateManyWithWhereWithoutBrandsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => productsScalarWhereInputSchema),z.lazy(() => productsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const productsUncheckedUpdateManyWithoutBrandsNestedInputSchema: z.ZodType<Prisma.productsUncheckedUpdateManyWithoutBrandsNestedInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutBrandsInputSchema),z.lazy(() => productsCreateWithoutBrandsInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema),z.lazy(() => productsCreateOrConnectWithoutBrandsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => productsUpsertWithWhereUniqueWithoutBrandsInputSchema),z.lazy(() => productsUpsertWithWhereUniqueWithoutBrandsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyBrandsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => productsUpdateWithWhereUniqueWithoutBrandsInputSchema),z.lazy(() => productsUpdateWithWhereUniqueWithoutBrandsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => productsUpdateManyWithWhereWithoutBrandsInputSchema),z.lazy(() => productsUpdateManyWithWhereWithoutBrandsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => productsScalarWhereInputSchema),z.lazy(() => productsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const zonesCreateNestedManyWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesCreateNestedManyWithoutBuildingsInput> = z.object({
  create: z.union([ z.lazy(() => zonesCreateWithoutBuildingsInputSchema),z.lazy(() => zonesCreateWithoutBuildingsInputSchema).array(),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema),z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => zonesCreateManyBuildingsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const zonesUncheckedCreateNestedManyWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUncheckedCreateNestedManyWithoutBuildingsInput> = z.object({
  create: z.union([ z.lazy(() => zonesCreateWithoutBuildingsInputSchema),z.lazy(() => zonesCreateWithoutBuildingsInputSchema).array(),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema),z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => zonesCreateManyBuildingsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const zonesUpdateManyWithoutBuildingsNestedInputSchema: z.ZodType<Prisma.zonesUpdateManyWithoutBuildingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => zonesCreateWithoutBuildingsInputSchema),z.lazy(() => zonesCreateWithoutBuildingsInputSchema).array(),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema),z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => zonesUpsertWithWhereUniqueWithoutBuildingsInputSchema),z.lazy(() => zonesUpsertWithWhereUniqueWithoutBuildingsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => zonesCreateManyBuildingsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => zonesUpdateWithWhereUniqueWithoutBuildingsInputSchema),z.lazy(() => zonesUpdateWithWhereUniqueWithoutBuildingsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => zonesUpdateManyWithWhereWithoutBuildingsInputSchema),z.lazy(() => zonesUpdateManyWithWhereWithoutBuildingsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => zonesScalarWhereInputSchema),z.lazy(() => zonesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const zonesUncheckedUpdateManyWithoutBuildingsNestedInputSchema: z.ZodType<Prisma.zonesUncheckedUpdateManyWithoutBuildingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => zonesCreateWithoutBuildingsInputSchema),z.lazy(() => zonesCreateWithoutBuildingsInputSchema).array(),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema),z.lazy(() => zonesCreateOrConnectWithoutBuildingsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => zonesUpsertWithWhereUniqueWithoutBuildingsInputSchema),z.lazy(() => zonesUpsertWithWhereUniqueWithoutBuildingsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => zonesCreateManyBuildingsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => zonesWhereUniqueInputSchema),z.lazy(() => zonesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => zonesUpdateWithWhereUniqueWithoutBuildingsInputSchema),z.lazy(() => zonesUpdateWithWhereUniqueWithoutBuildingsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => zonesUpdateManyWithWhereWithoutBuildingsInputSchema),z.lazy(() => zonesUpdateManyWithWhereWithoutBuildingsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => zonesScalarWhereInputSchema),z.lazy(() => zonesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const productsCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.productsCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutCategoriesInputSchema),z.lazy(() => productsCreateWithoutCategoriesInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyCategoriesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const productsUncheckedCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUncheckedCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutCategoriesInputSchema),z.lazy(() => productsCreateWithoutCategoriesInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyCategoriesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const productsUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.productsUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutCategoriesInputSchema),z.lazy(() => productsCreateWithoutCategoriesInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => productsUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => productsUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyCategoriesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => productsUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => productsUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => productsUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => productsUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => productsScalarWhereInputSchema),z.lazy(() => productsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const productsUncheckedUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.productsUncheckedUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutCategoriesInputSchema),z.lazy(() => productsCreateWithoutCategoriesInputSchema).array(),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => productsCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => productsUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => productsUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => productsCreateManyCategoriesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => productsWhereUniqueInputSchema),z.lazy(() => productsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => productsUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => productsUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => productsUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => productsUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => productsScalarWhereInputSchema),z.lazy(() => productsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const productsCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.productsCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutItemsInputSchema),z.lazy(() => productsUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => productsCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => productsWhereUniqueInputSchema).optional()
}).strict();

export const product_statusCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.product_statusCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => product_statusCreateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => product_statusCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => product_statusWhereUniqueInputSchema).optional()
}).strict();

export const storage_locationsCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => storage_locationsCreateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => storage_locationsCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => storage_locationsWhereUniqueInputSchema).optional()
}).strict();

export const items_in_loanCreateNestedManyWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanCreateNestedManyWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateWithoutItemsInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyItemsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const items_in_loanUncheckedCreateNestedManyWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUncheckedCreateNestedManyWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateWithoutItemsInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyItemsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const productsUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.productsUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutItemsInputSchema),z.lazy(() => productsUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => productsCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => productsUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => productsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => productsUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => productsUpdateWithoutItemsInputSchema),z.lazy(() => productsUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export const product_statusUpdateOneWithoutItemsNestedInputSchema: z.ZodType<Prisma.product_statusUpdateOneWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => product_statusCreateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => product_statusCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => product_statusUpsertWithoutItemsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => product_statusWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => product_statusWhereInputSchema) ]).optional(),
  connect: z.lazy(() => product_statusWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => product_statusUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => product_statusUpdateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export const storage_locationsUpdateOneWithoutItemsNestedInputSchema: z.ZodType<Prisma.storage_locationsUpdateOneWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => storage_locationsCreateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => storage_locationsCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => storage_locationsUpsertWithoutItemsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => storage_locationsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => storage_locationsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => storage_locationsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => storage_locationsUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => storage_locationsUpdateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export const items_in_loanUpdateManyWithoutItemsNestedInputSchema: z.ZodType<Prisma.items_in_loanUpdateManyWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateWithoutItemsInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyItemsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => items_in_loanUpdateManyWithWhereWithoutItemsInputSchema),z.lazy(() => items_in_loanUpdateManyWithWhereWithoutItemsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => items_in_loanScalarWhereInputSchema),z.lazy(() => items_in_loanScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const items_in_loanUncheckedUpdateManyWithoutItemsNestedInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateManyWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateWithoutItemsInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyItemsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => items_in_loanUpdateManyWithWhereWithoutItemsInputSchema),z.lazy(() => items_in_loanUpdateManyWithWhereWithoutItemsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => items_in_loanScalarWhereInputSchema),z.lazy(() => items_in_loanScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const itemsCreateNestedOneWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsCreateNestedOneWithoutItems_in_loanInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedCreateWithoutItems_in_loanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => itemsCreateOrConnectWithoutItems_in_loanInputSchema).optional(),
  connect: z.lazy(() => itemsWhereUniqueInputSchema).optional()
}).strict();

export const loansCreateNestedOneWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansCreateNestedOneWithoutItems_in_loanInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedCreateWithoutItems_in_loanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => loansCreateOrConnectWithoutItems_in_loanInputSchema).optional(),
  connect: z.lazy(() => loansWhereUniqueInputSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const itemsUpdateOneRequiredWithoutItems_in_loanNestedInputSchema: z.ZodType<Prisma.itemsUpdateOneRequiredWithoutItems_in_loanNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedCreateWithoutItems_in_loanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => itemsCreateOrConnectWithoutItems_in_loanInputSchema).optional(),
  upsert: z.lazy(() => itemsUpsertWithoutItems_in_loanInputSchema).optional(),
  connect: z.lazy(() => itemsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => itemsUpdateToOneWithWhereWithoutItems_in_loanInputSchema),z.lazy(() => itemsUpdateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutItems_in_loanInputSchema) ]).optional(),
}).strict();

export const loansUpdateOneRequiredWithoutItems_in_loanNestedInputSchema: z.ZodType<Prisma.loansUpdateOneRequiredWithoutItems_in_loanNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedCreateWithoutItems_in_loanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => loansCreateOrConnectWithoutItems_in_loanInputSchema).optional(),
  upsert: z.lazy(() => loansUpsertWithoutItems_in_loanInputSchema).optional(),
  connect: z.lazy(() => loansWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => loansUpdateToOneWithWhereWithoutItems_in_loanInputSchema),z.lazy(() => loansUpdateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedUpdateWithoutItems_in_loanInputSchema) ]).optional(),
}).strict();

export const items_in_loanCreateNestedManyWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanCreateNestedManyWithoutLoansInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateWithoutLoansInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyLoansInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export const zonesCreateNestedOneWithoutLoansInputSchema: z.ZodType<Prisma.zonesCreateNestedOneWithoutLoansInput> = z.object({
  create: z.union([ z.lazy(() => zonesCreateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedCreateWithoutLoansInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => zonesCreateOrConnectWithoutLoansInputSchema).optional(),
  connect: z.lazy(() => zonesWhereUniqueInputSchema).optional()
}).strict();

export const recipient_typeCreateNestedOneWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeCreateNestedOneWithoutLoansInput> = z.object({
  create: z.union([ z.lazy(() => recipient_typeCreateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedCreateWithoutLoansInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => recipient_typeCreateOrConnectWithoutLoansInputSchema).optional(),
  connect: z.lazy(() => recipient_typeWhereUniqueInputSchema).optional()
}).strict();

export const selfservice_caseCreateNestedOneWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseCreateNestedOneWithoutLoansInput> = z.object({
  create: z.union([ z.lazy(() => selfservice_caseCreateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedCreateWithoutLoansInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => selfservice_caseCreateOrConnectWithoutLoansInputSchema).optional(),
  connect: z.lazy(() => selfservice_caseWhereUniqueInputSchema).optional()
}).strict();

export const usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutLoans_loans_user_idTousersInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_user_idTousersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLoans_loans_user_idTousersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export const items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUncheckedCreateNestedManyWithoutLoansInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateWithoutLoansInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyLoansInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const items_in_loanUpdateManyWithoutLoansNestedInputSchema: z.ZodType<Prisma.items_in_loanUpdateManyWithoutLoansNestedInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateWithoutLoansInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutLoansInputSchema),z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutLoansInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyLoansInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutLoansInputSchema),z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutLoansInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => items_in_loanUpdateManyWithWhereWithoutLoansInputSchema),z.lazy(() => items_in_loanUpdateManyWithWhereWithoutLoansInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => items_in_loanScalarWhereInputSchema),z.lazy(() => items_in_loanScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]).optional(),
}).strict();

export const zonesUpdateOneWithoutLoansNestedInputSchema: z.ZodType<Prisma.zonesUpdateOneWithoutLoansNestedInput> = z.object({
  create: z.union([ z.lazy(() => zonesCreateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedCreateWithoutLoansInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => zonesCreateOrConnectWithoutLoansInputSchema).optional(),
  upsert: z.lazy(() => zonesUpsertWithoutLoansInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => zonesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => zonesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => zonesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => zonesUpdateToOneWithWhereWithoutLoansInputSchema),z.lazy(() => zonesUpdateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedUpdateWithoutLoansInputSchema) ]).optional(),
}).strict();

export const recipient_typeUpdateOneWithoutLoansNestedInputSchema: z.ZodType<Prisma.recipient_typeUpdateOneWithoutLoansNestedInput> = z.object({
  create: z.union([ z.lazy(() => recipient_typeCreateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedCreateWithoutLoansInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => recipient_typeCreateOrConnectWithoutLoansInputSchema).optional(),
  upsert: z.lazy(() => recipient_typeUpsertWithoutLoansInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => recipient_typeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => recipient_typeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => recipient_typeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => recipient_typeUpdateToOneWithWhereWithoutLoansInputSchema),z.lazy(() => recipient_typeUpdateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedUpdateWithoutLoansInputSchema) ]).optional(),
}).strict();

export const selfservice_caseUpdateOneWithoutLoansNestedInputSchema: z.ZodType<Prisma.selfservice_caseUpdateOneWithoutLoansNestedInput> = z.object({
  create: z.union([ z.lazy(() => selfservice_caseCreateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedCreateWithoutLoansInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => selfservice_caseCreateOrConnectWithoutLoansInputSchema).optional(),
  upsert: z.lazy(() => selfservice_caseUpsertWithoutLoansInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => selfservice_caseWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => selfservice_caseWhereInputSchema) ]).optional(),
  connect: z.lazy(() => selfservice_caseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => selfservice_caseUpdateToOneWithWhereWithoutLoansInputSchema),z.lazy(() => selfservice_caseUpdateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedUpdateWithoutLoansInputSchema) ]).optional(),
}).strict();

export const usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_user_idTousersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLoans_loans_user_idTousersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutLoans_loans_user_idTousersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUpdateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLoans_loans_user_idTousersInputSchema) ]).optional(),
}).strict();

export const items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateManyWithoutLoansNestedInput> = z.object({
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateWithoutLoansInputSchema).array(),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema),z.lazy(() => items_in_loanCreateOrConnectWithoutLoansInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutLoansInputSchema),z.lazy(() => items_in_loanUpsertWithWhereUniqueWithoutLoansInputSchema).array() ]).optional(),
  createMany: z.lazy(() => items_in_loanCreateManyLoansInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => items_in_loanWhereUniqueInputSchema),z.lazy(() => items_in_loanWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutLoansInputSchema),z.lazy(() => items_in_loanUpdateWithWhereUniqueWithoutLoansInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => items_in_loanUpdateManyWithWhereWithoutLoansInputSchema),z.lazy(() => items_in_loanUpdateManyWithWhereWithoutLoansInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => items_in_loanScalarWhereInputSchema),z.lazy(() => items_in_loanScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const itemsCreateNestedManyWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsCreateNestedManyWithoutProduct_statusInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateWithoutProduct_statusInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProduct_statusInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const itemsUncheckedCreateNestedManyWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUncheckedCreateNestedManyWithoutProduct_statusInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateWithoutProduct_statusInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProduct_statusInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const itemsUpdateManyWithoutProduct_statusNestedInputSchema: z.ZodType<Prisma.itemsUpdateManyWithoutProduct_statusNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateWithoutProduct_statusInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => itemsUpsertWithWhereUniqueWithoutProduct_statusInputSchema),z.lazy(() => itemsUpsertWithWhereUniqueWithoutProduct_statusInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProduct_statusInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => itemsUpdateWithWhereUniqueWithoutProduct_statusInputSchema),z.lazy(() => itemsUpdateWithWhereUniqueWithoutProduct_statusInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => itemsUpdateManyWithWhereWithoutProduct_statusInputSchema),z.lazy(() => itemsUpdateManyWithWhereWithoutProduct_statusInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const itemsUncheckedUpdateManyWithoutProduct_statusNestedInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyWithoutProduct_statusNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateWithoutProduct_statusInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProduct_statusInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => itemsUpsertWithWhereUniqueWithoutProduct_statusInputSchema),z.lazy(() => itemsUpsertWithWhereUniqueWithoutProduct_statusInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProduct_statusInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => itemsUpdateWithWhereUniqueWithoutProduct_statusInputSchema),z.lazy(() => itemsUpdateWithWhereUniqueWithoutProduct_statusInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => itemsUpdateManyWithWhereWithoutProduct_statusInputSchema),z.lazy(() => itemsUpdateManyWithWhereWithoutProduct_statusInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const itemsCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.itemsCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProductsInputSchema),z.lazy(() => itemsCreateWithoutProductsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProductsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const categoriesCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.categoriesCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => categoriesCreateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional()
}).strict();

export const brandsCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.brandsCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => brandsCreateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => brandsCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => brandsWhereUniqueInputSchema).optional()
}).strict();

export const itemsUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.itemsUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProductsInputSchema),z.lazy(() => itemsCreateWithoutProductsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProductsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const itemsUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.itemsUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProductsInputSchema),z.lazy(() => itemsCreateWithoutProductsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => itemsUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => itemsUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProductsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => itemsUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => itemsUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => itemsUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => itemsUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const categoriesUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => categoriesCreateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => categoriesUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => categoriesUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => categoriesUpdateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const brandsUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.brandsUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => brandsCreateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => brandsCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => brandsUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => brandsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => brandsUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => brandsUpdateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const itemsUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutProductsInputSchema),z.lazy(() => itemsCreateWithoutProductsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => itemsUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => itemsUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyProductsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => itemsUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => itemsUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => itemsUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => itemsUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansCreateNestedManyWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansCreateNestedManyWithoutRecipient_typeInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateWithoutRecipient_typeInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyRecipient_typeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedCreateNestedManyWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUncheckedCreateNestedManyWithoutRecipient_typeInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateWithoutRecipient_typeInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyRecipient_typeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUpdateManyWithoutRecipient_typeNestedInputSchema: z.ZodType<Prisma.loansUpdateManyWithoutRecipient_typeNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateWithoutRecipient_typeInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutRecipient_typeInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutRecipient_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyRecipient_typeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutRecipient_typeInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutRecipient_typeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutRecipient_typeInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutRecipient_typeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedUpdateManyWithoutRecipient_typeNestedInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutRecipient_typeNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateWithoutRecipient_typeInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema),z.lazy(() => loansCreateOrConnectWithoutRecipient_typeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutRecipient_typeInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutRecipient_typeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyRecipient_typeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutRecipient_typeInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutRecipient_typeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutRecipient_typeInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutRecipient_typeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansCreateNestedManyWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansCreateNestedManyWithoutSelfservice_caseInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManySelfservice_caseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedCreateNestedManyWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUncheckedCreateNestedManyWithoutSelfservice_caseInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManySelfservice_caseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUpdateManyWithoutSelfservice_caseNestedInputSchema: z.ZodType<Prisma.loansUpdateManyWithoutSelfservice_caseNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutSelfservice_caseInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutSelfservice_caseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManySelfservice_caseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutSelfservice_caseInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutSelfservice_caseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutSelfservice_caseInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutSelfservice_caseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedUpdateManyWithoutSelfservice_caseNestedInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutSelfservice_caseNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema),z.lazy(() => loansCreateOrConnectWithoutSelfservice_caseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutSelfservice_caseInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutSelfservice_caseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManySelfservice_caseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutSelfservice_caseInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutSelfservice_caseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutSelfservice_caseInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutSelfservice_caseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const itemsCreateNestedManyWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsCreateNestedManyWithoutStorage_locationsInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyStorage_locationsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const itemsUncheckedCreateNestedManyWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUncheckedCreateNestedManyWithoutStorage_locationsInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyStorage_locationsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const itemsUpdateManyWithoutStorage_locationsNestedInputSchema: z.ZodType<Prisma.itemsUpdateManyWithoutStorage_locationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => itemsUpsertWithWhereUniqueWithoutStorage_locationsInputSchema),z.lazy(() => itemsUpsertWithWhereUniqueWithoutStorage_locationsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyStorage_locationsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => itemsUpdateWithWhereUniqueWithoutStorage_locationsInputSchema),z.lazy(() => itemsUpdateWithWhereUniqueWithoutStorage_locationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => itemsUpdateManyWithWhereWithoutStorage_locationsInputSchema),z.lazy(() => itemsUpdateManyWithWhereWithoutStorage_locationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const itemsUncheckedUpdateManyWithoutStorage_locationsNestedInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyWithoutStorage_locationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema).array(),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema),z.lazy(() => itemsCreateOrConnectWithoutStorage_locationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => itemsUpsertWithWhereUniqueWithoutStorage_locationsInputSchema),z.lazy(() => itemsUpsertWithWhereUniqueWithoutStorage_locationsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => itemsCreateManyStorage_locationsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => itemsWhereUniqueInputSchema),z.lazy(() => itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => itemsUpdateWithWhereUniqueWithoutStorage_locationsInputSchema),z.lazy(() => itemsUpdateWithWhereUniqueWithoutStorage_locationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => itemsUpdateManyWithWhereWithoutStorage_locationsInputSchema),z.lazy(() => itemsUpdateManyWithWhereWithoutStorage_locationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_helpdesk_personel_idTousersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansCreateNestedManyWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansCreateNestedManyWithoutUsers_loans_user_idTousersInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_user_idTousersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_helpdesk_personel_idTousersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedCreateNestedManyWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedCreateNestedManyWithoutUsers_loans_user_idTousersInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_user_idTousersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInputSchema: z.ZodType<Prisma.loansUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_helpdesk_personel_idTousersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansUpdateManyWithoutUsers_loans_user_idTousersNestedInputSchema: z.ZodType<Prisma.loansUpdateManyWithoutUsers_loans_user_idTousersNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_user_idTousersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_helpdesk_personel_idTousersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersNestedInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyUsers_loans_user_idTousersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutUsers_loans_user_idTousersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const loansCreateNestedManyWithoutZonesInputSchema: z.ZodType<Prisma.loansCreateNestedManyWithoutZonesInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutZonesInputSchema),z.lazy(() => loansCreateWithoutZonesInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema),z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyZonesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const buildingsCreateNestedOneWithoutZonesInputSchema: z.ZodType<Prisma.buildingsCreateNestedOneWithoutZonesInput> = z.object({
  create: z.union([ z.lazy(() => buildingsCreateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedCreateWithoutZonesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => buildingsCreateOrConnectWithoutZonesInputSchema).optional(),
  connect: z.lazy(() => buildingsWhereUniqueInputSchema).optional()
}).strict();

export const loansUncheckedCreateNestedManyWithoutZonesInputSchema: z.ZodType<Prisma.loansUncheckedCreateNestedManyWithoutZonesInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutZonesInputSchema),z.lazy(() => loansCreateWithoutZonesInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema),z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyZonesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const loansUpdateManyWithoutZonesNestedInputSchema: z.ZodType<Prisma.loansUpdateManyWithoutZonesNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutZonesInputSchema),z.lazy(() => loansCreateWithoutZonesInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema),z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutZonesInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutZonesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyZonesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutZonesInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutZonesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutZonesInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutZonesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const buildingsUpdateOneRequiredWithoutZonesNestedInputSchema: z.ZodType<Prisma.buildingsUpdateOneRequiredWithoutZonesNestedInput> = z.object({
  create: z.union([ z.lazy(() => buildingsCreateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedCreateWithoutZonesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => buildingsCreateOrConnectWithoutZonesInputSchema).optional(),
  upsert: z.lazy(() => buildingsUpsertWithoutZonesInputSchema).optional(),
  connect: z.lazy(() => buildingsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => buildingsUpdateToOneWithWhereWithoutZonesInputSchema),z.lazy(() => buildingsUpdateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedUpdateWithoutZonesInputSchema) ]).optional(),
}).strict();

export const loansUncheckedUpdateManyWithoutZonesNestedInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutZonesNestedInput> = z.object({
  create: z.union([ z.lazy(() => loansCreateWithoutZonesInputSchema),z.lazy(() => loansCreateWithoutZonesInputSchema).array(),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema),z.lazy(() => loansCreateOrConnectWithoutZonesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => loansUpsertWithWhereUniqueWithoutZonesInputSchema),z.lazy(() => loansUpsertWithWhereUniqueWithoutZonesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => loansCreateManyZonesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => loansWhereUniqueInputSchema),z.lazy(() => loansWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => loansUpdateWithWhereUniqueWithoutZonesInputSchema),z.lazy(() => loansUpdateWithWhereUniqueWithoutZonesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => loansUpdateManyWithWhereWithoutZonesInputSchema),z.lazy(() => loansUpdateManyWithWhereWithoutZonesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const productsCreateWithoutBrandsInputSchema: z.ZodType<Prisma.productsCreateWithoutBrandsInput> = z.object({
  name: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  items: z.lazy(() => itemsCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => categoriesCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const productsUncheckedCreateWithoutBrandsInputSchema: z.ZodType<Prisma.productsUncheckedCreateWithoutBrandsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  category_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  items: z.lazy(() => itemsUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const productsCreateOrConnectWithoutBrandsInputSchema: z.ZodType<Prisma.productsCreateOrConnectWithoutBrandsInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => productsCreateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema) ]),
}).strict();

export const productsCreateManyBrandsInputEnvelopeSchema: z.ZodType<Prisma.productsCreateManyBrandsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => productsCreateManyBrandsInputSchema),z.lazy(() => productsCreateManyBrandsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const productsUpsertWithWhereUniqueWithoutBrandsInputSchema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutBrandsInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => productsUpdateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedUpdateWithoutBrandsInputSchema) ]),
  create: z.union([ z.lazy(() => productsCreateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedCreateWithoutBrandsInputSchema) ]),
}).strict();

export const productsUpdateWithWhereUniqueWithoutBrandsInputSchema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutBrandsInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => productsUpdateWithoutBrandsInputSchema),z.lazy(() => productsUncheckedUpdateWithoutBrandsInputSchema) ]),
}).strict();

export const productsUpdateManyWithWhereWithoutBrandsInputSchema: z.ZodType<Prisma.productsUpdateManyWithWhereWithoutBrandsInput> = z.object({
  where: z.lazy(() => productsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => productsUpdateManyMutationInputSchema),z.lazy(() => productsUncheckedUpdateManyWithoutBrandsInputSchema) ]),
}).strict();

export const productsScalarWhereInputSchema: z.ZodType<Prisma.productsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => productsScalarWhereInputSchema),z.lazy(() => productsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => productsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => productsScalarWhereInputSchema),z.lazy(() => productsScalarWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product_id_prefix: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const zonesCreateWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesCreateWithoutBuildingsInput> = z.object({
  name: z.string(),
  floor_level: z.number().int(),
  loans: z.lazy(() => loansCreateNestedManyWithoutZonesInputSchema).optional()
}).strict();

export const zonesUncheckedCreateWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUncheckedCreateWithoutBuildingsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  floor_level: z.number().int(),
  loans: z.lazy(() => loansUncheckedCreateNestedManyWithoutZonesInputSchema).optional()
}).strict();

export const zonesCreateOrConnectWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesCreateOrConnectWithoutBuildingsInput> = z.object({
  where: z.lazy(() => zonesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => zonesCreateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema) ]),
}).strict();

export const zonesCreateManyBuildingsInputEnvelopeSchema: z.ZodType<Prisma.zonesCreateManyBuildingsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => zonesCreateManyBuildingsInputSchema),z.lazy(() => zonesCreateManyBuildingsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const zonesUpsertWithWhereUniqueWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUpsertWithWhereUniqueWithoutBuildingsInput> = z.object({
  where: z.lazy(() => zonesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => zonesUpdateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedUpdateWithoutBuildingsInputSchema) ]),
  create: z.union([ z.lazy(() => zonesCreateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedCreateWithoutBuildingsInputSchema) ]),
}).strict();

export const zonesUpdateWithWhereUniqueWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUpdateWithWhereUniqueWithoutBuildingsInput> = z.object({
  where: z.lazy(() => zonesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => zonesUpdateWithoutBuildingsInputSchema),z.lazy(() => zonesUncheckedUpdateWithoutBuildingsInputSchema) ]),
}).strict();

export const zonesUpdateManyWithWhereWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUpdateManyWithWhereWithoutBuildingsInput> = z.object({
  where: z.lazy(() => zonesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => zonesUpdateManyMutationInputSchema),z.lazy(() => zonesUncheckedUpdateManyWithoutBuildingsInputSchema) ]),
}).strict();

export const zonesScalarWhereInputSchema: z.ZodType<Prisma.zonesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => zonesScalarWhereInputSchema),z.lazy(() => zonesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => zonesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => zonesScalarWhereInputSchema),z.lazy(() => zonesScalarWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  building_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  floor_level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const productsCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.productsCreateWithoutCategoriesInput> = z.object({
  name: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  items: z.lazy(() => itemsCreateNestedManyWithoutProductsInputSchema).optional(),
  brands: z.lazy(() => brandsCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const productsUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUncheckedCreateWithoutCategoriesInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  brand_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  items: z.lazy(() => itemsUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const productsCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.productsCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => productsCreateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const productsCreateManyCategoriesInputEnvelopeSchema: z.ZodType<Prisma.productsCreateManyCategoriesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => productsCreateManyCategoriesInputSchema),z.lazy(() => productsCreateManyCategoriesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const productsUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => productsUpdateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => productsCreateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const productsUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => productsUpdateWithoutCategoriesInputSchema),z.lazy(() => productsUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export const productsUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => productsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => productsUpdateManyMutationInputSchema),z.lazy(() => productsUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const productsCreateWithoutItemsInputSchema: z.ZodType<Prisma.productsCreateWithoutItemsInput> = z.object({
  name: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable(),
  categories: z.lazy(() => categoriesCreateNestedOneWithoutProductsInputSchema),
  brands: z.lazy(() => brandsCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const productsUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.productsUncheckedCreateWithoutItemsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  brand_id: z.number().int(),
  category_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable()
}).strict();

export const productsCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.productsCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => productsCreateWithoutItemsInputSchema),z.lazy(() => productsUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const product_statusCreateWithoutItemsInputSchema: z.ZodType<Prisma.product_statusCreateWithoutItemsInput> = z.object({
  name: z.string()
}).strict();

export const product_statusUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.product_statusUncheckedCreateWithoutItemsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const product_statusCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.product_statusCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => product_statusWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => product_statusCreateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const storage_locationsCreateWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsCreateWithoutItemsInput> = z.object({
  zone_id: z.number().int(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  idle_since: z.coerce.date().optional().nullable(),
  img_name: z.string().optional().nullable(),
  date_updated: z.coerce.date().optional()
}).strict();

export const storage_locationsUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsUncheckedCreateWithoutItemsInput> = z.object({
  UUID: z.number().int().optional(),
  zone_id: z.number().int(),
  kabinet: z.string().optional().nullable(),
  shelf: z.string().optional().nullable(),
  idle_since: z.coerce.date().optional().nullable(),
  img_name: z.string().optional().nullable(),
  date_updated: z.coerce.date().optional()
}).strict();

export const storage_locationsCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => storage_locationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => storage_locationsCreateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const items_in_loanCreateWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanCreateWithoutItemsInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional(),
  loans: z.lazy(() => loansCreateNestedOneWithoutItems_in_loanInputSchema)
}).strict();

export const items_in_loanUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUncheckedCreateWithoutItemsInput> = z.object({
  UUID: z.number().int().optional(),
  loan_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional()
}).strict();

export const items_in_loanCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => items_in_loanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const items_in_loanCreateManyItemsInputEnvelopeSchema: z.ZodType<Prisma.items_in_loanCreateManyItemsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => items_in_loanCreateManyItemsInputSchema),z.lazy(() => items_in_loanCreateManyItemsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const productsUpsertWithoutItemsInputSchema: z.ZodType<Prisma.productsUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => productsUpdateWithoutItemsInputSchema),z.lazy(() => productsUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => productsCreateWithoutItemsInputSchema),z.lazy(() => productsUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => productsWhereInputSchema).optional()
}).strict();

export const productsUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.productsUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => productsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => productsUpdateWithoutItemsInputSchema),z.lazy(() => productsUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const productsUpdateWithoutItemsInputSchema: z.ZodType<Prisma.productsUpdateWithoutItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => categoriesUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  brands: z.lazy(() => brandsUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.productsUncheckedUpdateWithoutItemsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  category_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const product_statusUpsertWithoutItemsInputSchema: z.ZodType<Prisma.product_statusUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => product_statusUpdateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => product_statusCreateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => product_statusWhereInputSchema).optional()
}).strict();

export const product_statusUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.product_statusUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => product_statusWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => product_statusUpdateWithoutItemsInputSchema),z.lazy(() => product_statusUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const product_statusUpdateWithoutItemsInputSchema: z.ZodType<Prisma.product_statusUpdateWithoutItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const product_statusUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.product_statusUncheckedUpdateWithoutItemsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const storage_locationsUpsertWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => storage_locationsUpdateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => storage_locationsCreateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => storage_locationsWhereInputSchema).optional()
}).strict();

export const storage_locationsUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => storage_locationsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => storage_locationsUpdateWithoutItemsInputSchema),z.lazy(() => storage_locationsUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const storage_locationsUpdateWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsUpdateWithoutItemsInput> = z.object({
  zone_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idle_since: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const storage_locationsUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.storage_locationsUncheckedUpdateWithoutItemsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  zone_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kabinet: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shelf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  idle_since: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanUpsertWithWhereUniqueWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUpsertWithWhereUniqueWithoutItemsInput> = z.object({
  where: z.lazy(() => items_in_loanWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => items_in_loanUpdateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const items_in_loanUpdateWithWhereUniqueWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUpdateWithWhereUniqueWithoutItemsInput> = z.object({
  where: z.lazy(() => items_in_loanWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => items_in_loanUpdateWithoutItemsInputSchema),z.lazy(() => items_in_loanUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const items_in_loanUpdateManyWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUpdateManyWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => items_in_loanScalarWhereInputSchema),
  data: z.union([ z.lazy(() => items_in_loanUpdateManyMutationInputSchema),z.lazy(() => items_in_loanUncheckedUpdateManyWithoutItemsInputSchema) ]),
}).strict();

export const items_in_loanScalarWhereInputSchema: z.ZodType<Prisma.items_in_loanScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => items_in_loanScalarWhereInputSchema),z.lazy(() => items_in_loanScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => items_in_loanScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => items_in_loanScalarWhereInputSchema),z.lazy(() => items_in_loanScalarWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  loan_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  item_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_returned: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  withBag: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  withLock: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const itemsCreateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsCreateWithoutItems_in_loanInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  products: z.lazy(() => productsCreateNestedOneWithoutItemsInputSchema),
  product_status: z.lazy(() => product_statusCreateNestedOneWithoutItemsInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsCreateNestedOneWithoutItemsInputSchema).optional()
}).strict();

export const itemsUncheckedCreateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsUncheckedCreateWithoutItems_in_loanInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable()
}).strict();

export const itemsCreateOrConnectWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsCreateOrConnectWithoutItems_in_loanInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => itemsCreateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedCreateWithoutItems_in_loanInputSchema) ]),
}).strict();

export const loansCreateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansCreateWithoutItems_in_loanInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  zones: z.lazy(() => zonesCreateNestedOneWithoutLoansInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeCreateNestedOneWithoutLoansInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseCreateNestedOneWithoutLoansInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema)
}).strict();

export const loansUncheckedCreateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansUncheckedCreateWithoutItems_in_loanInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansCreateOrConnectWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansCreateOrConnectWithoutItems_in_loanInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => loansCreateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedCreateWithoutItems_in_loanInputSchema) ]),
}).strict();

export const itemsUpsertWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsUpsertWithoutItems_in_loanInput> = z.object({
  update: z.union([ z.lazy(() => itemsUpdateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutItems_in_loanInputSchema) ]),
  create: z.union([ z.lazy(() => itemsCreateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedCreateWithoutItems_in_loanInputSchema) ]),
  where: z.lazy(() => itemsWhereInputSchema).optional()
}).strict();

export const itemsUpdateToOneWithWhereWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsUpdateToOneWithWhereWithoutItems_in_loanInput> = z.object({
  where: z.lazy(() => itemsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => itemsUpdateWithoutItems_in_loanInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutItems_in_loanInputSchema) ]),
}).strict();

export const itemsUpdateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsUpdateWithoutItems_in_loanInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => productsUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  product_status: z.lazy(() => product_statusUpdateOneWithoutItemsNestedInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsUpdateOneWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateWithoutItems_in_loanInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loansUpsertWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansUpsertWithoutItems_in_loanInput> = z.object({
  update: z.union([ z.lazy(() => loansUpdateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedUpdateWithoutItems_in_loanInputSchema) ]),
  create: z.union([ z.lazy(() => loansCreateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedCreateWithoutItems_in_loanInputSchema) ]),
  where: z.lazy(() => loansWhereInputSchema).optional()
}).strict();

export const loansUpdateToOneWithWhereWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansUpdateToOneWithWhereWithoutItems_in_loanInput> = z.object({
  where: z.lazy(() => loansWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => loansUpdateWithoutItems_in_loanInputSchema),z.lazy(() => loansUncheckedUpdateWithoutItems_in_loanInputSchema) ]),
}).strict();

export const loansUpdateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansUpdateWithoutItems_in_loanInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  zones: z.lazy(() => zonesUpdateOneWithoutLoansNestedInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeUpdateOneWithoutLoansNestedInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseUpdateOneWithoutLoansNestedInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateWithoutItems_in_loanInputSchema: z.ZodType<Prisma.loansUncheckedUpdateWithoutItems_in_loanInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanCreateWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanCreateWithoutLoansInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional(),
  items: z.lazy(() => itemsCreateNestedOneWithoutItems_in_loanInputSchema)
}).strict();

export const items_in_loanUncheckedCreateWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUncheckedCreateWithoutLoansInput> = z.object({
  UUID: z.number().int().optional(),
  item_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional()
}).strict();

export const items_in_loanCreateOrConnectWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanCreateOrConnectWithoutLoansInput> = z.object({
  where: z.lazy(() => items_in_loanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema) ]),
}).strict();

export const items_in_loanCreateManyLoansInputEnvelopeSchema: z.ZodType<Prisma.items_in_loanCreateManyLoansInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => items_in_loanCreateManyLoansInputSchema),z.lazy(() => items_in_loanCreateManyLoansInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const usersCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersCreateWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  loans_loans_user_idTousers: z.lazy(() => loansCreateNestedManyWithoutUsers_loans_user_idTousersInputSchema).optional()
}).strict();

export const usersUncheckedCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  UUID: z.number().int().optional(),
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  loans_loans_user_idTousers: z.lazy(() => loansUncheckedCreateNestedManyWithoutUsers_loans_user_idTousersInputSchema).optional()
}).strict();

export const usersCreateOrConnectWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]),
}).strict();

export const zonesCreateWithoutLoansInputSchema: z.ZodType<Prisma.zonesCreateWithoutLoansInput> = z.object({
  name: z.string(),
  floor_level: z.number().int(),
  buildings: z.lazy(() => buildingsCreateNestedOneWithoutZonesInputSchema)
}).strict();

export const zonesUncheckedCreateWithoutLoansInputSchema: z.ZodType<Prisma.zonesUncheckedCreateWithoutLoansInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  building_id: z.number().int(),
  floor_level: z.number().int()
}).strict();

export const zonesCreateOrConnectWithoutLoansInputSchema: z.ZodType<Prisma.zonesCreateOrConnectWithoutLoansInput> = z.object({
  where: z.lazy(() => zonesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => zonesCreateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedCreateWithoutLoansInputSchema) ]),
}).strict();

export const recipient_typeCreateWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeCreateWithoutLoansInput> = z.object({
  name: z.string()
}).strict();

export const recipient_typeUncheckedCreateWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeUncheckedCreateWithoutLoansInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const recipient_typeCreateOrConnectWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeCreateOrConnectWithoutLoansInput> = z.object({
  where: z.lazy(() => recipient_typeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => recipient_typeCreateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedCreateWithoutLoansInputSchema) ]),
}).strict();

export const selfservice_caseCreateWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseCreateWithoutLoansInput> = z.object({
  delivery_location_id: z.number().int().optional().nullable(),
  pickup_location_id: z.number().int().optional().nullable(),
  distribution_date: z.coerce.date(),
  estimated_time_consumption: z.coerce.date().optional().nullable()
}).strict();

export const selfservice_caseUncheckedCreateWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseUncheckedCreateWithoutLoansInput> = z.object({
  UUID: z.number().int().optional(),
  delivery_location_id: z.number().int().optional().nullable(),
  pickup_location_id: z.number().int().optional().nullable(),
  distribution_date: z.coerce.date(),
  estimated_time_consumption: z.coerce.date().optional().nullable()
}).strict();

export const selfservice_caseCreateOrConnectWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseCreateOrConnectWithoutLoansInput> = z.object({
  where: z.lazy(() => selfservice_caseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => selfservice_caseCreateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedCreateWithoutLoansInputSchema) ]),
}).strict();

export const usersCreateWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersCreateWithoutLoans_loans_user_idTousersInput> = z.object({
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).optional()
}).strict();

export const usersUncheckedCreateWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutLoans_loans_user_idTousersInput> = z.object({
  UUID: z.number().int().optional(),
  username: z.string(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansUncheckedCreateNestedManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema).optional()
}).strict();

export const usersCreateOrConnectWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutLoans_loans_user_idTousersInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_user_idTousersInputSchema) ]),
}).strict();

export const items_in_loanUpsertWithWhereUniqueWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUpsertWithWhereUniqueWithoutLoansInput> = z.object({
  where: z.lazy(() => items_in_loanWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => items_in_loanUpdateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedUpdateWithoutLoansInputSchema) ]),
  create: z.union([ z.lazy(() => items_in_loanCreateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedCreateWithoutLoansInputSchema) ]),
}).strict();

export const items_in_loanUpdateWithWhereUniqueWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUpdateWithWhereUniqueWithoutLoansInput> = z.object({
  where: z.lazy(() => items_in_loanWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => items_in_loanUpdateWithoutLoansInputSchema),z.lazy(() => items_in_loanUncheckedUpdateWithoutLoansInputSchema) ]),
}).strict();

export const items_in_loanUpdateManyWithWhereWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUpdateManyWithWhereWithoutLoansInput> = z.object({
  where: z.lazy(() => items_in_loanScalarWhereInputSchema),
  data: z.union([ z.lazy(() => items_in_loanUpdateManyMutationInputSchema),z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansInputSchema) ]),
}).strict();

export const usersUpsertWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersUpsertWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const usersUpdateToOneWithWhereWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema) ]),
}).strict();

export const usersUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersUpdateWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansUpdateManyWithoutUsers_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateWithoutLoans_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutLoans_loans_helpdesk_personel_idTousersInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loans_loans_user_idTousers: z.lazy(() => loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const zonesUpsertWithoutLoansInputSchema: z.ZodType<Prisma.zonesUpsertWithoutLoansInput> = z.object({
  update: z.union([ z.lazy(() => zonesUpdateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedUpdateWithoutLoansInputSchema) ]),
  create: z.union([ z.lazy(() => zonesCreateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedCreateWithoutLoansInputSchema) ]),
  where: z.lazy(() => zonesWhereInputSchema).optional()
}).strict();

export const zonesUpdateToOneWithWhereWithoutLoansInputSchema: z.ZodType<Prisma.zonesUpdateToOneWithWhereWithoutLoansInput> = z.object({
  where: z.lazy(() => zonesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => zonesUpdateWithoutLoansInputSchema),z.lazy(() => zonesUncheckedUpdateWithoutLoansInputSchema) ]),
}).strict();

export const zonesUpdateWithoutLoansInputSchema: z.ZodType<Prisma.zonesUpdateWithoutLoansInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  buildings: z.lazy(() => buildingsUpdateOneRequiredWithoutZonesNestedInputSchema).optional()
}).strict();

export const zonesUncheckedUpdateWithoutLoansInputSchema: z.ZodType<Prisma.zonesUncheckedUpdateWithoutLoansInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  building_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const recipient_typeUpsertWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeUpsertWithoutLoansInput> = z.object({
  update: z.union([ z.lazy(() => recipient_typeUpdateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedUpdateWithoutLoansInputSchema) ]),
  create: z.union([ z.lazy(() => recipient_typeCreateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedCreateWithoutLoansInputSchema) ]),
  where: z.lazy(() => recipient_typeWhereInputSchema).optional()
}).strict();

export const recipient_typeUpdateToOneWithWhereWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeUpdateToOneWithWhereWithoutLoansInput> = z.object({
  where: z.lazy(() => recipient_typeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => recipient_typeUpdateWithoutLoansInputSchema),z.lazy(() => recipient_typeUncheckedUpdateWithoutLoansInputSchema) ]),
}).strict();

export const recipient_typeUpdateWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeUpdateWithoutLoansInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const recipient_typeUncheckedUpdateWithoutLoansInputSchema: z.ZodType<Prisma.recipient_typeUncheckedUpdateWithoutLoansInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const selfservice_caseUpsertWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseUpsertWithoutLoansInput> = z.object({
  update: z.union([ z.lazy(() => selfservice_caseUpdateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedUpdateWithoutLoansInputSchema) ]),
  create: z.union([ z.lazy(() => selfservice_caseCreateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedCreateWithoutLoansInputSchema) ]),
  where: z.lazy(() => selfservice_caseWhereInputSchema).optional()
}).strict();

export const selfservice_caseUpdateToOneWithWhereWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseUpdateToOneWithWhereWithoutLoansInput> = z.object({
  where: z.lazy(() => selfservice_caseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => selfservice_caseUpdateWithoutLoansInputSchema),z.lazy(() => selfservice_caseUncheckedUpdateWithoutLoansInputSchema) ]),
}).strict();

export const selfservice_caseUpdateWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseUpdateWithoutLoansInput> = z.object({
  delivery_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pickup_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  distribution_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  estimated_time_consumption: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const selfservice_caseUncheckedUpdateWithoutLoansInputSchema: z.ZodType<Prisma.selfservice_caseUncheckedUpdateWithoutLoansInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pickup_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  distribution_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  estimated_time_consumption: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const usersUpsertWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersUpsertWithoutLoans_loans_user_idTousersInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLoans_loans_user_idTousersInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedCreateWithoutLoans_loans_user_idTousersInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const usersUpdateToOneWithWhereWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutLoans_loans_user_idTousersInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutLoans_loans_user_idTousersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLoans_loans_user_idTousersInputSchema) ]),
}).strict();

export const usersUpdateWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersUpdateWithoutLoans_loans_user_idTousersInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateWithoutLoans_loans_user_idTousersInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutLoans_loans_user_idTousersInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loans_loans_helpdesk_personel_idTousers: z.lazy(() => loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersNestedInputSchema).optional()
}).strict();

export const itemsCreateWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsCreateWithoutProduct_statusInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  products: z.lazy(() => productsCreateNestedOneWithoutItemsInputSchema),
  storage_locations: z.lazy(() => storage_locationsCreateNestedOneWithoutItemsInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsUncheckedCreateWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUncheckedCreateWithoutProduct_statusInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsCreateOrConnectWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsCreateOrConnectWithoutProduct_statusInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => itemsCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema) ]),
}).strict();

export const itemsCreateManyProduct_statusInputEnvelopeSchema: z.ZodType<Prisma.itemsCreateManyProduct_statusInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => itemsCreateManyProduct_statusInputSchema),z.lazy(() => itemsCreateManyProduct_statusInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const itemsUpsertWithWhereUniqueWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUpsertWithWhereUniqueWithoutProduct_statusInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => itemsUpdateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutProduct_statusInputSchema) ]),
  create: z.union([ z.lazy(() => itemsCreateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProduct_statusInputSchema) ]),
}).strict();

export const itemsUpdateWithWhereUniqueWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUpdateWithWhereUniqueWithoutProduct_statusInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => itemsUpdateWithoutProduct_statusInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutProduct_statusInputSchema) ]),
}).strict();

export const itemsUpdateManyWithWhereWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUpdateManyWithWhereWithoutProduct_statusInput> = z.object({
  where: z.lazy(() => itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => itemsUpdateManyMutationInputSchema),z.lazy(() => itemsUncheckedUpdateManyWithoutProduct_statusInputSchema) ]),
}).strict();

export const itemsScalarWhereInputSchema: z.ZodType<Prisma.itemsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => itemsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => itemsScalarWhereInputSchema),z.lazy(() => itemsScalarWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  storage_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  product_status_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  product_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  barcode_number: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const itemsCreateWithoutProductsInputSchema: z.ZodType<Prisma.itemsCreateWithoutProductsInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  product_status: z.lazy(() => product_statusCreateNestedOneWithoutItemsInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsCreateNestedOneWithoutItemsInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.itemsUncheckedCreateWithoutProductsInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.itemsCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => itemsCreateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const itemsCreateManyProductsInputEnvelopeSchema: z.ZodType<Prisma.itemsCreateManyProductsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => itemsCreateManyProductsInputSchema),z.lazy(() => itemsCreateManyProductsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const categoriesCreateWithoutProductsInputSchema: z.ZodType<Prisma.categoriesCreateWithoutProductsInput> = z.object({
  name: z.string()
}).strict();

export const categoriesUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.categoriesUncheckedCreateWithoutProductsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const categoriesCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => categoriesCreateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const brandsCreateWithoutProductsInputSchema: z.ZodType<Prisma.brandsCreateWithoutProductsInput> = z.object({
  name: z.string()
}).strict();

export const brandsUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.brandsUncheckedCreateWithoutProductsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string()
}).strict();

export const brandsCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.brandsCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => brandsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => brandsCreateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const itemsUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.itemsUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => itemsUpdateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => itemsCreateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const itemsUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.itemsUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => itemsUpdateWithoutProductsInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const itemsUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.itemsUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => itemsUpdateManyMutationInputSchema),z.lazy(() => itemsUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const categoriesUpsertWithoutProductsInputSchema: z.ZodType<Prisma.categoriesUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => categoriesUpdateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => categoriesCreateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => categoriesWhereInputSchema).optional()
}).strict();

export const categoriesUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.categoriesUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => categoriesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => categoriesUpdateWithoutProductsInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const categoriesUpdateWithoutProductsInputSchema: z.ZodType<Prisma.categoriesUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const categoriesUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.categoriesUncheckedUpdateWithoutProductsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const brandsUpsertWithoutProductsInputSchema: z.ZodType<Prisma.brandsUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => brandsUpdateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => brandsCreateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => brandsWhereInputSchema).optional()
}).strict();

export const brandsUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.brandsUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => brandsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => brandsUpdateWithoutProductsInputSchema),z.lazy(() => brandsUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const brandsUpdateWithoutProductsInputSchema: z.ZodType<Prisma.brandsUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const brandsUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.brandsUncheckedUpdateWithoutProductsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const loansCreateWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansCreateWithoutRecipient_typeInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutLoansInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  zones: z.lazy(() => zonesCreateNestedOneWithoutLoansInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseCreateNestedOneWithoutLoansInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema)
}).strict();

export const loansUncheckedCreateWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUncheckedCreateWithoutRecipient_typeInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema).optional()
}).strict();

export const loansCreateOrConnectWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansCreateOrConnectWithoutRecipient_typeInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => loansCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema) ]),
}).strict();

export const loansCreateManyRecipient_typeInputEnvelopeSchema: z.ZodType<Prisma.loansCreateManyRecipient_typeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => loansCreateManyRecipient_typeInputSchema),z.lazy(() => loansCreateManyRecipient_typeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const loansUpsertWithWhereUniqueWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUpsertWithWhereUniqueWithoutRecipient_typeInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => loansUpdateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedUpdateWithoutRecipient_typeInputSchema) ]),
  create: z.union([ z.lazy(() => loansCreateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedCreateWithoutRecipient_typeInputSchema) ]),
}).strict();

export const loansUpdateWithWhereUniqueWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUpdateWithWhereUniqueWithoutRecipient_typeInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => loansUpdateWithoutRecipient_typeInputSchema),z.lazy(() => loansUncheckedUpdateWithoutRecipient_typeInputSchema) ]),
}).strict();

export const loansUpdateManyWithWhereWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUpdateManyWithWhereWithoutRecipient_typeInput> = z.object({
  where: z.lazy(() => loansScalarWhereInputSchema),
  data: z.union([ z.lazy(() => loansUpdateManyMutationInputSchema),z.lazy(() => loansUncheckedUpdateManyWithoutRecipient_typeInputSchema) ]),
}).strict();

export const loansScalarWhereInputSchema: z.ZodType<Prisma.loansScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => loansScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => loansScalarWhereInputSchema),z.lazy(() => loansScalarWhereInputSchema).array() ]).optional(),
  UUID: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date_created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_updated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date_of_return: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  location_of_use_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  helpdesk_personel_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  selfservice_case_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  recipient_type_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  loan_length: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  mail_sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const loansCreateWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansCreateWithoutSelfservice_caseInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutLoansInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  zones: z.lazy(() => zonesCreateNestedOneWithoutLoansInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeCreateNestedOneWithoutLoansInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema)
}).strict();

export const loansUncheckedCreateWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUncheckedCreateWithoutSelfservice_caseInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema).optional()
}).strict();

export const loansCreateOrConnectWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansCreateOrConnectWithoutSelfservice_caseInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema) ]),
}).strict();

export const loansCreateManySelfservice_caseInputEnvelopeSchema: z.ZodType<Prisma.loansCreateManySelfservice_caseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => loansCreateManySelfservice_caseInputSchema),z.lazy(() => loansCreateManySelfservice_caseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const loansUpsertWithWhereUniqueWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUpsertWithWhereUniqueWithoutSelfservice_caseInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => loansUpdateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedUpdateWithoutSelfservice_caseInputSchema) ]),
  create: z.union([ z.lazy(() => loansCreateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedCreateWithoutSelfservice_caseInputSchema) ]),
}).strict();

export const loansUpdateWithWhereUniqueWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUpdateWithWhereUniqueWithoutSelfservice_caseInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => loansUpdateWithoutSelfservice_caseInputSchema),z.lazy(() => loansUncheckedUpdateWithoutSelfservice_caseInputSchema) ]),
}).strict();

export const loansUpdateManyWithWhereWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUpdateManyWithWhereWithoutSelfservice_caseInput> = z.object({
  where: z.lazy(() => loansScalarWhereInputSchema),
  data: z.union([ z.lazy(() => loansUpdateManyMutationInputSchema),z.lazy(() => loansUncheckedUpdateManyWithoutSelfservice_caseInputSchema) ]),
}).strict();

export const itemsCreateWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsCreateWithoutStorage_locationsInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  products: z.lazy(() => productsCreateNestedOneWithoutItemsInputSchema),
  product_status: z.lazy(() => product_statusCreateNestedOneWithoutItemsInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsUncheckedCreateWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUncheckedCreateWithoutStorage_locationsInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const itemsCreateOrConnectWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsCreateOrConnectWithoutStorage_locationsInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema) ]),
}).strict();

export const itemsCreateManyStorage_locationsInputEnvelopeSchema: z.ZodType<Prisma.itemsCreateManyStorage_locationsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => itemsCreateManyStorage_locationsInputSchema),z.lazy(() => itemsCreateManyStorage_locationsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const itemsUpsertWithWhereUniqueWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUpsertWithWhereUniqueWithoutStorage_locationsInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => itemsUpdateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutStorage_locationsInputSchema) ]),
  create: z.union([ z.lazy(() => itemsCreateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedCreateWithoutStorage_locationsInputSchema) ]),
}).strict();

export const itemsUpdateWithWhereUniqueWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUpdateWithWhereUniqueWithoutStorage_locationsInput> = z.object({
  where: z.lazy(() => itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => itemsUpdateWithoutStorage_locationsInputSchema),z.lazy(() => itemsUncheckedUpdateWithoutStorage_locationsInputSchema) ]),
}).strict();

export const itemsUpdateManyWithWhereWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUpdateManyWithWhereWithoutStorage_locationsInput> = z.object({
  where: z.lazy(() => itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => itemsUpdateManyMutationInputSchema),z.lazy(() => itemsUncheckedUpdateManyWithoutStorage_locationsInputSchema) ]),
}).strict();

export const loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutLoansInputSchema).optional(),
  zones: z.lazy(() => zonesCreateNestedOneWithoutLoansInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeCreateNestedOneWithoutLoansInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseCreateNestedOneWithoutLoansInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema)
}).strict();

export const loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema).optional()
}).strict();

export const loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansCreateOrConnectWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema) ]),
}).strict();

export const loansCreateManyUsers_loans_helpdesk_personel_idTousersInputEnvelopeSchema: z.ZodType<Prisma.loansCreateManyUsers_loans_helpdesk_personel_idTousersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => loansCreateManyUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansCreateManyUsers_loans_helpdesk_personel_idTousersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const loansCreateWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansCreateWithoutUsers_loans_user_idTousersInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutLoansInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  zones: z.lazy(() => zonesCreateNestedOneWithoutLoansInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeCreateNestedOneWithoutLoansInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseCreateNestedOneWithoutLoansInputSchema).optional()
}).strict();

export const loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedCreateWithoutUsers_loans_user_idTousersInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema).optional()
}).strict();

export const loansCreateOrConnectWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansCreateOrConnectWithoutUsers_loans_user_idTousersInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema) ]),
}).strict();

export const loansCreateManyUsers_loans_user_idTousersInputEnvelopeSchema: z.ZodType<Prisma.loansCreateManyUsers_loans_user_idTousersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => loansCreateManyUsers_loans_user_idTousersInputSchema),z.lazy(() => loansCreateManyUsers_loans_user_idTousersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const loansUpsertWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUpsertWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => loansUpdateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedUpdateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema) ]),
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema) ]),
}).strict();

export const loansUpdateWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUpdateWithWhereUniqueWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => loansUpdateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema),z.lazy(() => loansUncheckedUpdateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema) ]),
}).strict();

export const loansUpdateManyWithWhereWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUpdateManyWithWhereWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  where: z.lazy(() => loansScalarWhereInputSchema),
  data: z.union([ z.lazy(() => loansUpdateManyMutationInputSchema),z.lazy(() => loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema) ]),
}).strict();

export const loansUpsertWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUpsertWithWhereUniqueWithoutUsers_loans_user_idTousersInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => loansUpdateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedUpdateWithoutUsers_loans_user_idTousersInputSchema) ]),
  create: z.union([ z.lazy(() => loansCreateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedCreateWithoutUsers_loans_user_idTousersInputSchema) ]),
}).strict();

export const loansUpdateWithWhereUniqueWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUpdateWithWhereUniqueWithoutUsers_loans_user_idTousersInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => loansUpdateWithoutUsers_loans_user_idTousersInputSchema),z.lazy(() => loansUncheckedUpdateWithoutUsers_loans_user_idTousersInputSchema) ]),
}).strict();

export const loansUpdateManyWithWhereWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUpdateManyWithWhereWithoutUsers_loans_user_idTousersInput> = z.object({
  where: z.lazy(() => loansScalarWhereInputSchema),
  data: z.union([ z.lazy(() => loansUpdateManyMutationInputSchema),z.lazy(() => loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersInputSchema) ]),
}).strict();

export const loansCreateWithoutZonesInputSchema: z.ZodType<Prisma.loansCreateWithoutZonesInput> = z.object({
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanCreateNestedManyWithoutLoansInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_helpdesk_personel_idTousersInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeCreateNestedOneWithoutLoansInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseCreateNestedOneWithoutLoansInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersCreateNestedOneWithoutLoans_loans_user_idTousersInputSchema)
}).strict();

export const loansUncheckedCreateWithoutZonesInputSchema: z.ZodType<Prisma.loansUncheckedCreateWithoutZonesInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedCreateNestedManyWithoutLoansInputSchema).optional()
}).strict();

export const loansCreateOrConnectWithoutZonesInputSchema: z.ZodType<Prisma.loansCreateOrConnectWithoutZonesInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => loansCreateWithoutZonesInputSchema),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema) ]),
}).strict();

export const loansCreateManyZonesInputEnvelopeSchema: z.ZodType<Prisma.loansCreateManyZonesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => loansCreateManyZonesInputSchema),z.lazy(() => loansCreateManyZonesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const buildingsCreateWithoutZonesInputSchema: z.ZodType<Prisma.buildingsCreateWithoutZonesInput> = z.object({
  name: z.string().optional().nullable()
}).strict();

export const buildingsUncheckedCreateWithoutZonesInputSchema: z.ZodType<Prisma.buildingsUncheckedCreateWithoutZonesInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string().optional().nullable()
}).strict();

export const buildingsCreateOrConnectWithoutZonesInputSchema: z.ZodType<Prisma.buildingsCreateOrConnectWithoutZonesInput> = z.object({
  where: z.lazy(() => buildingsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => buildingsCreateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedCreateWithoutZonesInputSchema) ]),
}).strict();

export const loansUpsertWithWhereUniqueWithoutZonesInputSchema: z.ZodType<Prisma.loansUpsertWithWhereUniqueWithoutZonesInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => loansUpdateWithoutZonesInputSchema),z.lazy(() => loansUncheckedUpdateWithoutZonesInputSchema) ]),
  create: z.union([ z.lazy(() => loansCreateWithoutZonesInputSchema),z.lazy(() => loansUncheckedCreateWithoutZonesInputSchema) ]),
}).strict();

export const loansUpdateWithWhereUniqueWithoutZonesInputSchema: z.ZodType<Prisma.loansUpdateWithWhereUniqueWithoutZonesInput> = z.object({
  where: z.lazy(() => loansWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => loansUpdateWithoutZonesInputSchema),z.lazy(() => loansUncheckedUpdateWithoutZonesInputSchema) ]),
}).strict();

export const loansUpdateManyWithWhereWithoutZonesInputSchema: z.ZodType<Prisma.loansUpdateManyWithWhereWithoutZonesInput> = z.object({
  where: z.lazy(() => loansScalarWhereInputSchema),
  data: z.union([ z.lazy(() => loansUpdateManyMutationInputSchema),z.lazy(() => loansUncheckedUpdateManyWithoutZonesInputSchema) ]),
}).strict();

export const buildingsUpsertWithoutZonesInputSchema: z.ZodType<Prisma.buildingsUpsertWithoutZonesInput> = z.object({
  update: z.union([ z.lazy(() => buildingsUpdateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedUpdateWithoutZonesInputSchema) ]),
  create: z.union([ z.lazy(() => buildingsCreateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedCreateWithoutZonesInputSchema) ]),
  where: z.lazy(() => buildingsWhereInputSchema).optional()
}).strict();

export const buildingsUpdateToOneWithWhereWithoutZonesInputSchema: z.ZodType<Prisma.buildingsUpdateToOneWithWhereWithoutZonesInput> = z.object({
  where: z.lazy(() => buildingsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => buildingsUpdateWithoutZonesInputSchema),z.lazy(() => buildingsUncheckedUpdateWithoutZonesInputSchema) ]),
}).strict();

export const buildingsUpdateWithoutZonesInputSchema: z.ZodType<Prisma.buildingsUpdateWithoutZonesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const buildingsUncheckedUpdateWithoutZonesInputSchema: z.ZodType<Prisma.buildingsUncheckedUpdateWithoutZonesInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const productsCreateManyBrandsInputSchema: z.ZodType<Prisma.productsCreateManyBrandsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  category_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable()
}).strict();

export const productsUpdateWithoutBrandsInputSchema: z.ZodType<Prisma.productsUpdateWithoutBrandsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => itemsUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => categoriesUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsUncheckedUpdateWithoutBrandsInputSchema: z.ZodType<Prisma.productsUncheckedUpdateWithoutBrandsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => itemsUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsUncheckedUpdateManyWithoutBrandsInputSchema: z.ZodType<Prisma.productsUncheckedUpdateManyWithoutBrandsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const zonesCreateManyBuildingsInputSchema: z.ZodType<Prisma.zonesCreateManyBuildingsInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  floor_level: z.number().int()
}).strict();

export const zonesUpdateWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUpdateWithoutBuildingsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUpdateManyWithoutZonesNestedInputSchema).optional()
}).strict();

export const zonesUncheckedUpdateWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUncheckedUpdateWithoutBuildingsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUncheckedUpdateManyWithoutZonesNestedInputSchema).optional()
}).strict();

export const zonesUncheckedUpdateManyWithoutBuildingsInputSchema: z.ZodType<Prisma.zonesUncheckedUpdateManyWithoutBuildingsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  floor_level: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const productsCreateManyCategoriesInputSchema: z.ZodType<Prisma.productsCreateManyCategoriesInput> = z.object({
  UUID: z.number().int().optional(),
  name: z.string(),
  brand_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  product_id_prefix: z.string().optional().nullable(),
  image_name: z.string().optional().nullable()
}).strict();

export const productsUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUpdateWithoutCategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => itemsUpdateManyWithoutProductsNestedInputSchema).optional(),
  brands: z.lazy(() => brandsUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUncheckedUpdateWithoutCategoriesInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => itemsUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const productsUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.productsUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_id_prefix: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const items_in_loanCreateManyItemsInputSchema: z.ZodType<Prisma.items_in_loanCreateManyItemsInput> = z.object({
  UUID: z.number().int().optional(),
  loan_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional()
}).strict();

export const items_in_loanUpdateWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUpdateWithoutItemsInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  loans: z.lazy(() => loansUpdateOneRequiredWithoutItems_in_loanNestedInputSchema).optional()
}).strict();

export const items_in_loanUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateWithoutItemsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanUncheckedUpdateManyWithoutItemsInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateManyWithoutItemsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  loan_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanCreateManyLoansInputSchema: z.ZodType<Prisma.items_in_loanCreateManyLoansInput> = z.object({
  UUID: z.number().int().optional(),
  item_id: z.number().int(),
  date_created: z.coerce.date().optional(),
  date_returned: z.coerce.date().optional().nullable(),
  withBag: z.boolean().optional(),
  withLock: z.boolean().optional()
}).strict();

export const items_in_loanUpdateWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUpdateWithoutLoansInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => itemsUpdateOneRequiredWithoutItems_in_loanNestedInputSchema).optional()
}).strict();

export const items_in_loanUncheckedUpdateWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateWithoutLoansInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const items_in_loanUncheckedUpdateManyWithoutLoansInputSchema: z.ZodType<Prisma.items_in_loanUncheckedUpdateManyWithoutLoansInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_returned: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  withBag: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  withLock: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const itemsCreateManyProduct_statusInputSchema: z.ZodType<Prisma.itemsCreateManyProduct_statusInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable()
}).strict();

export const itemsUpdateWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUpdateWithoutProduct_statusInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => productsUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsUpdateOneWithoutItemsNestedInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateWithoutProduct_statusInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateManyWithoutProduct_statusInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyWithoutProduct_statusInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const itemsCreateManyProductsInputSchema: z.ZodType<Prisma.itemsCreateManyProductsInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  storage_location_id: z.number().int().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable()
}).strict();

export const itemsUpdateWithoutProductsInputSchema: z.ZodType<Prisma.itemsUpdateWithoutProductsInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status: z.lazy(() => product_statusUpdateOneWithoutItemsNestedInputSchema).optional(),
  storage_locations: z.lazy(() => storage_locationsUpdateOneWithoutItemsNestedInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateWithoutProductsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyWithoutProductsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storage_location_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loansCreateManyRecipient_typeInputSchema: z.ZodType<Prisma.loansCreateManyRecipient_typeInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansUpdateWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUpdateWithoutRecipient_typeInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutLoansNestedInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  zones: z.lazy(() => zonesUpdateOneWithoutLoansNestedInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseUpdateOneWithoutLoansNestedInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUncheckedUpdateWithoutRecipient_typeInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateManyWithoutRecipient_typeInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutRecipient_typeInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const loansCreateManySelfservice_caseInputSchema: z.ZodType<Prisma.loansCreateManySelfservice_caseInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansUpdateWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUpdateWithoutSelfservice_caseInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutLoansNestedInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  zones: z.lazy(() => zonesUpdateOneWithoutLoansNestedInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeUpdateOneWithoutLoansNestedInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUncheckedUpdateWithoutSelfservice_caseInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateManyWithoutSelfservice_caseInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutSelfservice_caseInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const itemsCreateManyStorage_locationsInputSchema: z.ZodType<Prisma.itemsCreateManyStorage_locationsInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional().nullable(),
  product_status_id: z.number().int().optional().nullable(),
  product_id: z.number().int(),
  description: z.string().optional().nullable(),
  barcode_number: z.number().int().optional().nullable()
}).strict();

export const itemsUpdateWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUpdateWithoutStorage_locationsInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => productsUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  product_status: z.lazy(() => product_statusUpdateOneWithoutItemsNestedInputSchema).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateWithoutStorage_locationsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const itemsUncheckedUpdateManyWithoutStorage_locationsInputSchema: z.ZodType<Prisma.itemsUncheckedUpdateManyWithoutStorage_locationsInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_status_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  product_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  barcode_number: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const loansCreateManyUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansCreateManyUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  user_id: z.number().int(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansCreateManyUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansCreateManyUsers_loans_user_idTousersInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  location_of_use_id: z.number().int().optional().nullable(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansUpdateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUpdateWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutLoansNestedInputSchema).optional(),
  zones: z.lazy(() => zonesUpdateOneWithoutLoansNestedInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeUpdateOneWithoutLoansNestedInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseUpdateOneWithoutLoansNestedInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedUpdateWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutUsers_loans_helpdesk_personel_idTousersInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const loansUpdateWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUpdateWithoutUsers_loans_user_idTousersInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutLoansNestedInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  zones: z.lazy(() => zonesUpdateOneWithoutLoansNestedInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeUpdateOneWithoutLoansNestedInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseUpdateOneWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedUpdateWithoutUsers_loans_user_idTousersInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutUsers_loans_user_idTousersInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_of_use_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const loansCreateManyZonesInputSchema: z.ZodType<Prisma.loansCreateManyZonesInput> = z.object({
  UUID: z.number().int().optional(),
  date_created: z.coerce.date().optional(),
  date_updated: z.coerce.date().optional(),
  date_of_return: z.coerce.date().optional().nullable(),
  user_id: z.number().int(),
  helpdesk_personel_id: z.number().int().optional().nullable(),
  selfservice_case_id: z.number().int().optional().nullable(),
  recipient_type_id: z.number().int().optional().nullable(),
  loan_length: z.number().int().optional().nullable(),
  mail_sent: z.boolean().optional()
}).strict();

export const loansUpdateWithoutZonesInputSchema: z.ZodType<Prisma.loansUpdateWithoutZonesInput> = z.object({
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUpdateManyWithoutLoansNestedInputSchema).optional(),
  users_loans_helpdesk_personel_idTousers: z.lazy(() => usersUpdateOneWithoutLoans_loans_helpdesk_personel_idTousersNestedInputSchema).optional(),
  recipient_type: z.lazy(() => recipient_typeUpdateOneWithoutLoansNestedInputSchema).optional(),
  selfservice_case: z.lazy(() => selfservice_caseUpdateOneWithoutLoansNestedInputSchema).optional(),
  users_loans_user_idTousers: z.lazy(() => usersUpdateOneRequiredWithoutLoans_loans_user_idTousersNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateWithoutZonesInputSchema: z.ZodType<Prisma.loansUncheckedUpdateWithoutZonesInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  items_in_loan: z.lazy(() => items_in_loanUncheckedUpdateManyWithoutLoansNestedInputSchema).optional()
}).strict();

export const loansUncheckedUpdateManyWithoutZonesInputSchema: z.ZodType<Prisma.loansUncheckedUpdateManyWithoutZonesInput> = z.object({
  UUID: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date_created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_updated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_return: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  helpdesk_personel_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfservice_case_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  recipient_type_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loan_length: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mail_sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const brandsFindFirstArgsSchema: z.ZodType<Prisma.brandsFindFirstArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereInputSchema.optional(),
  orderBy: z.union([ brandsOrderByWithRelationInputSchema.array(),brandsOrderByWithRelationInputSchema ]).optional(),
  cursor: brandsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandsScalarFieldEnumSchema,BrandsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const brandsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.brandsFindFirstOrThrowArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereInputSchema.optional(),
  orderBy: z.union([ brandsOrderByWithRelationInputSchema.array(),brandsOrderByWithRelationInputSchema ]).optional(),
  cursor: brandsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandsScalarFieldEnumSchema,BrandsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const brandsFindManyArgsSchema: z.ZodType<Prisma.brandsFindManyArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereInputSchema.optional(),
  orderBy: z.union([ brandsOrderByWithRelationInputSchema.array(),brandsOrderByWithRelationInputSchema ]).optional(),
  cursor: brandsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandsScalarFieldEnumSchema,BrandsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const brandsAggregateArgsSchema: z.ZodType<Prisma.brandsAggregateArgs> = z.object({
  where: brandsWhereInputSchema.optional(),
  orderBy: z.union([ brandsOrderByWithRelationInputSchema.array(),brandsOrderByWithRelationInputSchema ]).optional(),
  cursor: brandsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const brandsGroupByArgsSchema: z.ZodType<Prisma.brandsGroupByArgs> = z.object({
  where: brandsWhereInputSchema.optional(),
  orderBy: z.union([ brandsOrderByWithAggregationInputSchema.array(),brandsOrderByWithAggregationInputSchema ]).optional(),
  by: BrandsScalarFieldEnumSchema.array(),
  having: brandsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const brandsFindUniqueArgsSchema: z.ZodType<Prisma.brandsFindUniqueArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereUniqueInputSchema,
}).strict() ;

export const brandsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.brandsFindUniqueOrThrowArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereUniqueInputSchema,
}).strict() ;

export const buildingsFindFirstArgsSchema: z.ZodType<Prisma.buildingsFindFirstArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereInputSchema.optional(),
  orderBy: z.union([ buildingsOrderByWithRelationInputSchema.array(),buildingsOrderByWithRelationInputSchema ]).optional(),
  cursor: buildingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingsScalarFieldEnumSchema,BuildingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const buildingsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.buildingsFindFirstOrThrowArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereInputSchema.optional(),
  orderBy: z.union([ buildingsOrderByWithRelationInputSchema.array(),buildingsOrderByWithRelationInputSchema ]).optional(),
  cursor: buildingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingsScalarFieldEnumSchema,BuildingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const buildingsFindManyArgsSchema: z.ZodType<Prisma.buildingsFindManyArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereInputSchema.optional(),
  orderBy: z.union([ buildingsOrderByWithRelationInputSchema.array(),buildingsOrderByWithRelationInputSchema ]).optional(),
  cursor: buildingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingsScalarFieldEnumSchema,BuildingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const buildingsAggregateArgsSchema: z.ZodType<Prisma.buildingsAggregateArgs> = z.object({
  where: buildingsWhereInputSchema.optional(),
  orderBy: z.union([ buildingsOrderByWithRelationInputSchema.array(),buildingsOrderByWithRelationInputSchema ]).optional(),
  cursor: buildingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const buildingsGroupByArgsSchema: z.ZodType<Prisma.buildingsGroupByArgs> = z.object({
  where: buildingsWhereInputSchema.optional(),
  orderBy: z.union([ buildingsOrderByWithAggregationInputSchema.array(),buildingsOrderByWithAggregationInputSchema ]).optional(),
  by: BuildingsScalarFieldEnumSchema.array(),
  having: buildingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const buildingsFindUniqueArgsSchema: z.ZodType<Prisma.buildingsFindUniqueArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereUniqueInputSchema,
}).strict() ;

export const buildingsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.buildingsFindUniqueOrThrowArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereUniqueInputSchema,
}).strict() ;

export const categoriesFindFirstArgsSchema: z.ZodType<Prisma.categoriesFindFirstArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereInputSchema.optional(),
  orderBy: z.union([ categoriesOrderByWithRelationInputSchema.array(),categoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: categoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoriesScalarFieldEnumSchema,CategoriesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const categoriesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.categoriesFindFirstOrThrowArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereInputSchema.optional(),
  orderBy: z.union([ categoriesOrderByWithRelationInputSchema.array(),categoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: categoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoriesScalarFieldEnumSchema,CategoriesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const categoriesFindManyArgsSchema: z.ZodType<Prisma.categoriesFindManyArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereInputSchema.optional(),
  orderBy: z.union([ categoriesOrderByWithRelationInputSchema.array(),categoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: categoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoriesScalarFieldEnumSchema,CategoriesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const categoriesAggregateArgsSchema: z.ZodType<Prisma.categoriesAggregateArgs> = z.object({
  where: categoriesWhereInputSchema.optional(),
  orderBy: z.union([ categoriesOrderByWithRelationInputSchema.array(),categoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: categoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const categoriesGroupByArgsSchema: z.ZodType<Prisma.categoriesGroupByArgs> = z.object({
  where: categoriesWhereInputSchema.optional(),
  orderBy: z.union([ categoriesOrderByWithAggregationInputSchema.array(),categoriesOrderByWithAggregationInputSchema ]).optional(),
  by: CategoriesScalarFieldEnumSchema.array(),
  having: categoriesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const categoriesFindUniqueArgsSchema: z.ZodType<Prisma.categoriesFindUniqueArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereUniqueInputSchema,
}).strict() ;

export const categoriesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.categoriesFindUniqueOrThrowArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereUniqueInputSchema,
}).strict() ;

export const itemsFindFirstArgsSchema: z.ZodType<Prisma.itemsFindFirstArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereInputSchema.optional(),
  orderBy: z.union([ itemsOrderByWithRelationInputSchema.array(),itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ItemsScalarFieldEnumSchema,ItemsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const itemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.itemsFindFirstOrThrowArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereInputSchema.optional(),
  orderBy: z.union([ itemsOrderByWithRelationInputSchema.array(),itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ItemsScalarFieldEnumSchema,ItemsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const itemsFindManyArgsSchema: z.ZodType<Prisma.itemsFindManyArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereInputSchema.optional(),
  orderBy: z.union([ itemsOrderByWithRelationInputSchema.array(),itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ItemsScalarFieldEnumSchema,ItemsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const itemsAggregateArgsSchema: z.ZodType<Prisma.itemsAggregateArgs> = z.object({
  where: itemsWhereInputSchema.optional(),
  orderBy: z.union([ itemsOrderByWithRelationInputSchema.array(),itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const itemsGroupByArgsSchema: z.ZodType<Prisma.itemsGroupByArgs> = z.object({
  where: itemsWhereInputSchema.optional(),
  orderBy: z.union([ itemsOrderByWithAggregationInputSchema.array(),itemsOrderByWithAggregationInputSchema ]).optional(),
  by: ItemsScalarFieldEnumSchema.array(),
  having: itemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const itemsFindUniqueArgsSchema: z.ZodType<Prisma.itemsFindUniqueArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereUniqueInputSchema,
}).strict() ;

export const itemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.itemsFindUniqueOrThrowArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereUniqueInputSchema,
}).strict() ;

export const items_in_loanFindFirstArgsSchema: z.ZodType<Prisma.items_in_loanFindFirstArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereInputSchema.optional(),
  orderBy: z.union([ items_in_loanOrderByWithRelationInputSchema.array(),items_in_loanOrderByWithRelationInputSchema ]).optional(),
  cursor: items_in_loanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_in_loanScalarFieldEnumSchema,Items_in_loanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_in_loanFindFirstOrThrowArgsSchema: z.ZodType<Prisma.items_in_loanFindFirstOrThrowArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereInputSchema.optional(),
  orderBy: z.union([ items_in_loanOrderByWithRelationInputSchema.array(),items_in_loanOrderByWithRelationInputSchema ]).optional(),
  cursor: items_in_loanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_in_loanScalarFieldEnumSchema,Items_in_loanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_in_loanFindManyArgsSchema: z.ZodType<Prisma.items_in_loanFindManyArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereInputSchema.optional(),
  orderBy: z.union([ items_in_loanOrderByWithRelationInputSchema.array(),items_in_loanOrderByWithRelationInputSchema ]).optional(),
  cursor: items_in_loanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_in_loanScalarFieldEnumSchema,Items_in_loanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_in_loanAggregateArgsSchema: z.ZodType<Prisma.items_in_loanAggregateArgs> = z.object({
  where: items_in_loanWhereInputSchema.optional(),
  orderBy: z.union([ items_in_loanOrderByWithRelationInputSchema.array(),items_in_loanOrderByWithRelationInputSchema ]).optional(),
  cursor: items_in_loanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_in_loanGroupByArgsSchema: z.ZodType<Prisma.items_in_loanGroupByArgs> = z.object({
  where: items_in_loanWhereInputSchema.optional(),
  orderBy: z.union([ items_in_loanOrderByWithAggregationInputSchema.array(),items_in_loanOrderByWithAggregationInputSchema ]).optional(),
  by: Items_in_loanScalarFieldEnumSchema.array(),
  having: items_in_loanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_in_loanFindUniqueArgsSchema: z.ZodType<Prisma.items_in_loanFindUniqueArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereUniqueInputSchema,
}).strict() ;

export const items_in_loanFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.items_in_loanFindUniqueOrThrowArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereUniqueInputSchema,
}).strict() ;

export const loansFindFirstArgsSchema: z.ZodType<Prisma.loansFindFirstArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereInputSchema.optional(),
  orderBy: z.union([ loansOrderByWithRelationInputSchema.array(),loansOrderByWithRelationInputSchema ]).optional(),
  cursor: loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoansScalarFieldEnumSchema,LoansScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loansFindFirstOrThrowArgsSchema: z.ZodType<Prisma.loansFindFirstOrThrowArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereInputSchema.optional(),
  orderBy: z.union([ loansOrderByWithRelationInputSchema.array(),loansOrderByWithRelationInputSchema ]).optional(),
  cursor: loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoansScalarFieldEnumSchema,LoansScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loansFindManyArgsSchema: z.ZodType<Prisma.loansFindManyArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereInputSchema.optional(),
  orderBy: z.union([ loansOrderByWithRelationInputSchema.array(),loansOrderByWithRelationInputSchema ]).optional(),
  cursor: loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoansScalarFieldEnumSchema,LoansScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loansAggregateArgsSchema: z.ZodType<Prisma.loansAggregateArgs> = z.object({
  where: loansWhereInputSchema.optional(),
  orderBy: z.union([ loansOrderByWithRelationInputSchema.array(),loansOrderByWithRelationInputSchema ]).optional(),
  cursor: loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const loansGroupByArgsSchema: z.ZodType<Prisma.loansGroupByArgs> = z.object({
  where: loansWhereInputSchema.optional(),
  orderBy: z.union([ loansOrderByWithAggregationInputSchema.array(),loansOrderByWithAggregationInputSchema ]).optional(),
  by: LoansScalarFieldEnumSchema.array(),
  having: loansScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const loansFindUniqueArgsSchema: z.ZodType<Prisma.loansFindUniqueArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereUniqueInputSchema,
}).strict() ;

export const loansFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.loansFindUniqueOrThrowArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereUniqueInputSchema,
}).strict() ;

export const pickup_locationsFindFirstArgsSchema: z.ZodType<Prisma.pickup_locationsFindFirstArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereInputSchema.optional(),
  orderBy: z.union([ pickup_locationsOrderByWithRelationInputSchema.array(),pickup_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: pickup_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Pickup_locationsScalarFieldEnumSchema,Pickup_locationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const pickup_locationsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.pickup_locationsFindFirstOrThrowArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereInputSchema.optional(),
  orderBy: z.union([ pickup_locationsOrderByWithRelationInputSchema.array(),pickup_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: pickup_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Pickup_locationsScalarFieldEnumSchema,Pickup_locationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const pickup_locationsFindManyArgsSchema: z.ZodType<Prisma.pickup_locationsFindManyArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereInputSchema.optional(),
  orderBy: z.union([ pickup_locationsOrderByWithRelationInputSchema.array(),pickup_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: pickup_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Pickup_locationsScalarFieldEnumSchema,Pickup_locationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const pickup_locationsAggregateArgsSchema: z.ZodType<Prisma.pickup_locationsAggregateArgs> = z.object({
  where: pickup_locationsWhereInputSchema.optional(),
  orderBy: z.union([ pickup_locationsOrderByWithRelationInputSchema.array(),pickup_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: pickup_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const pickup_locationsGroupByArgsSchema: z.ZodType<Prisma.pickup_locationsGroupByArgs> = z.object({
  where: pickup_locationsWhereInputSchema.optional(),
  orderBy: z.union([ pickup_locationsOrderByWithAggregationInputSchema.array(),pickup_locationsOrderByWithAggregationInputSchema ]).optional(),
  by: Pickup_locationsScalarFieldEnumSchema.array(),
  having: pickup_locationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const pickup_locationsFindUniqueArgsSchema: z.ZodType<Prisma.pickup_locationsFindUniqueArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereUniqueInputSchema,
}).strict() ;

export const pickup_locationsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.pickup_locationsFindUniqueOrThrowArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereUniqueInputSchema,
}).strict() ;

export const product_statusFindFirstArgsSchema: z.ZodType<Prisma.product_statusFindFirstArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereInputSchema.optional(),
  orderBy: z.union([ product_statusOrderByWithRelationInputSchema.array(),product_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: product_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Product_statusScalarFieldEnumSchema,Product_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const product_statusFindFirstOrThrowArgsSchema: z.ZodType<Prisma.product_statusFindFirstOrThrowArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereInputSchema.optional(),
  orderBy: z.union([ product_statusOrderByWithRelationInputSchema.array(),product_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: product_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Product_statusScalarFieldEnumSchema,Product_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const product_statusFindManyArgsSchema: z.ZodType<Prisma.product_statusFindManyArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereInputSchema.optional(),
  orderBy: z.union([ product_statusOrderByWithRelationInputSchema.array(),product_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: product_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Product_statusScalarFieldEnumSchema,Product_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const product_statusAggregateArgsSchema: z.ZodType<Prisma.product_statusAggregateArgs> = z.object({
  where: product_statusWhereInputSchema.optional(),
  orderBy: z.union([ product_statusOrderByWithRelationInputSchema.array(),product_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: product_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const product_statusGroupByArgsSchema: z.ZodType<Prisma.product_statusGroupByArgs> = z.object({
  where: product_statusWhereInputSchema.optional(),
  orderBy: z.union([ product_statusOrderByWithAggregationInputSchema.array(),product_statusOrderByWithAggregationInputSchema ]).optional(),
  by: Product_statusScalarFieldEnumSchema.array(),
  having: product_statusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const product_statusFindUniqueArgsSchema: z.ZodType<Prisma.product_statusFindUniqueArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereUniqueInputSchema,
}).strict() ;

export const product_statusFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.product_statusFindUniqueOrThrowArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereUniqueInputSchema,
}).strict() ;

export const productsFindFirstArgsSchema: z.ZodType<Prisma.productsFindFirstArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithRelationInputSchema.array(),productsOrderByWithRelationInputSchema ]).optional(),
  cursor: productsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductsScalarFieldEnumSchema,ProductsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const productsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.productsFindFirstOrThrowArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithRelationInputSchema.array(),productsOrderByWithRelationInputSchema ]).optional(),
  cursor: productsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductsScalarFieldEnumSchema,ProductsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const productsFindManyArgsSchema: z.ZodType<Prisma.productsFindManyArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithRelationInputSchema.array(),productsOrderByWithRelationInputSchema ]).optional(),
  cursor: productsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductsScalarFieldEnumSchema,ProductsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const productsAggregateArgsSchema: z.ZodType<Prisma.productsAggregateArgs> = z.object({
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithRelationInputSchema.array(),productsOrderByWithRelationInputSchema ]).optional(),
  cursor: productsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const productsGroupByArgsSchema: z.ZodType<Prisma.productsGroupByArgs> = z.object({
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithAggregationInputSchema.array(),productsOrderByWithAggregationInputSchema ]).optional(),
  by: ProductsScalarFieldEnumSchema.array(),
  having: productsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const productsFindUniqueArgsSchema: z.ZodType<Prisma.productsFindUniqueArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereUniqueInputSchema,
}).strict() ;

export const productsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.productsFindUniqueOrThrowArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereUniqueInputSchema,
}).strict() ;

export const recipient_typeFindFirstArgsSchema: z.ZodType<Prisma.recipient_typeFindFirstArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereInputSchema.optional(),
  orderBy: z.union([ recipient_typeOrderByWithRelationInputSchema.array(),recipient_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: recipient_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Recipient_typeScalarFieldEnumSchema,Recipient_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const recipient_typeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.recipient_typeFindFirstOrThrowArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereInputSchema.optional(),
  orderBy: z.union([ recipient_typeOrderByWithRelationInputSchema.array(),recipient_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: recipient_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Recipient_typeScalarFieldEnumSchema,Recipient_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const recipient_typeFindManyArgsSchema: z.ZodType<Prisma.recipient_typeFindManyArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereInputSchema.optional(),
  orderBy: z.union([ recipient_typeOrderByWithRelationInputSchema.array(),recipient_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: recipient_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Recipient_typeScalarFieldEnumSchema,Recipient_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const recipient_typeAggregateArgsSchema: z.ZodType<Prisma.recipient_typeAggregateArgs> = z.object({
  where: recipient_typeWhereInputSchema.optional(),
  orderBy: z.union([ recipient_typeOrderByWithRelationInputSchema.array(),recipient_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: recipient_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const recipient_typeGroupByArgsSchema: z.ZodType<Prisma.recipient_typeGroupByArgs> = z.object({
  where: recipient_typeWhereInputSchema.optional(),
  orderBy: z.union([ recipient_typeOrderByWithAggregationInputSchema.array(),recipient_typeOrderByWithAggregationInputSchema ]).optional(),
  by: Recipient_typeScalarFieldEnumSchema.array(),
  having: recipient_typeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const recipient_typeFindUniqueArgsSchema: z.ZodType<Prisma.recipient_typeFindUniqueArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereUniqueInputSchema,
}).strict() ;

export const recipient_typeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.recipient_typeFindUniqueOrThrowArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereUniqueInputSchema,
}).strict() ;

export const selfservice_caseFindFirstArgsSchema: z.ZodType<Prisma.selfservice_caseFindFirstArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereInputSchema.optional(),
  orderBy: z.union([ selfservice_caseOrderByWithRelationInputSchema.array(),selfservice_caseOrderByWithRelationInputSchema ]).optional(),
  cursor: selfservice_caseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Selfservice_caseScalarFieldEnumSchema,Selfservice_caseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const selfservice_caseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.selfservice_caseFindFirstOrThrowArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereInputSchema.optional(),
  orderBy: z.union([ selfservice_caseOrderByWithRelationInputSchema.array(),selfservice_caseOrderByWithRelationInputSchema ]).optional(),
  cursor: selfservice_caseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Selfservice_caseScalarFieldEnumSchema,Selfservice_caseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const selfservice_caseFindManyArgsSchema: z.ZodType<Prisma.selfservice_caseFindManyArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereInputSchema.optional(),
  orderBy: z.union([ selfservice_caseOrderByWithRelationInputSchema.array(),selfservice_caseOrderByWithRelationInputSchema ]).optional(),
  cursor: selfservice_caseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Selfservice_caseScalarFieldEnumSchema,Selfservice_caseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const selfservice_caseAggregateArgsSchema: z.ZodType<Prisma.selfservice_caseAggregateArgs> = z.object({
  where: selfservice_caseWhereInputSchema.optional(),
  orderBy: z.union([ selfservice_caseOrderByWithRelationInputSchema.array(),selfservice_caseOrderByWithRelationInputSchema ]).optional(),
  cursor: selfservice_caseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const selfservice_caseGroupByArgsSchema: z.ZodType<Prisma.selfservice_caseGroupByArgs> = z.object({
  where: selfservice_caseWhereInputSchema.optional(),
  orderBy: z.union([ selfservice_caseOrderByWithAggregationInputSchema.array(),selfservice_caseOrderByWithAggregationInputSchema ]).optional(),
  by: Selfservice_caseScalarFieldEnumSchema.array(),
  having: selfservice_caseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const selfservice_caseFindUniqueArgsSchema: z.ZodType<Prisma.selfservice_caseFindUniqueArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereUniqueInputSchema,
}).strict() ;

export const selfservice_caseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.selfservice_caseFindUniqueOrThrowArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereUniqueInputSchema,
}).strict() ;

export const storage_locationsFindFirstArgsSchema: z.ZodType<Prisma.storage_locationsFindFirstArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereInputSchema.optional(),
  orderBy: z.union([ storage_locationsOrderByWithRelationInputSchema.array(),storage_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: storage_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Storage_locationsScalarFieldEnumSchema,Storage_locationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const storage_locationsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.storage_locationsFindFirstOrThrowArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereInputSchema.optional(),
  orderBy: z.union([ storage_locationsOrderByWithRelationInputSchema.array(),storage_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: storage_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Storage_locationsScalarFieldEnumSchema,Storage_locationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const storage_locationsFindManyArgsSchema: z.ZodType<Prisma.storage_locationsFindManyArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereInputSchema.optional(),
  orderBy: z.union([ storage_locationsOrderByWithRelationInputSchema.array(),storage_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: storage_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Storage_locationsScalarFieldEnumSchema,Storage_locationsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const storage_locationsAggregateArgsSchema: z.ZodType<Prisma.storage_locationsAggregateArgs> = z.object({
  where: storage_locationsWhereInputSchema.optional(),
  orderBy: z.union([ storage_locationsOrderByWithRelationInputSchema.array(),storage_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: storage_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const storage_locationsGroupByArgsSchema: z.ZodType<Prisma.storage_locationsGroupByArgs> = z.object({
  where: storage_locationsWhereInputSchema.optional(),
  orderBy: z.union([ storage_locationsOrderByWithAggregationInputSchema.array(),storage_locationsOrderByWithAggregationInputSchema ]).optional(),
  by: Storage_locationsScalarFieldEnumSchema.array(),
  having: storage_locationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const storage_locationsFindUniqueArgsSchema: z.ZodType<Prisma.storage_locationsFindUniqueArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereUniqueInputSchema,
}).strict() ;

export const storage_locationsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.storage_locationsFindUniqueOrThrowArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereUniqueInputSchema,
}).strict() ;

export const usersFindFirstArgsSchema: z.ZodType<Prisma.usersFindFirstArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.usersFindFirstOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersFindManyArgsSchema: z.ZodType<Prisma.usersFindManyArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersAggregateArgsSchema: z.ZodType<Prisma.usersAggregateArgs> = z.object({
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const usersGroupByArgsSchema: z.ZodType<Prisma.usersGroupByArgs> = z.object({
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithAggregationInputSchema.array(),usersOrderByWithAggregationInputSchema ]).optional(),
  by: UsersScalarFieldEnumSchema.array(),
  having: usersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const usersFindUniqueArgsSchema: z.ZodType<Prisma.usersFindUniqueArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.usersFindUniqueOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const zonesFindFirstArgsSchema: z.ZodType<Prisma.zonesFindFirstArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereInputSchema.optional(),
  orderBy: z.union([ zonesOrderByWithRelationInputSchema.array(),zonesOrderByWithRelationInputSchema ]).optional(),
  cursor: zonesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ZonesScalarFieldEnumSchema,ZonesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const zonesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.zonesFindFirstOrThrowArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereInputSchema.optional(),
  orderBy: z.union([ zonesOrderByWithRelationInputSchema.array(),zonesOrderByWithRelationInputSchema ]).optional(),
  cursor: zonesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ZonesScalarFieldEnumSchema,ZonesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const zonesFindManyArgsSchema: z.ZodType<Prisma.zonesFindManyArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereInputSchema.optional(),
  orderBy: z.union([ zonesOrderByWithRelationInputSchema.array(),zonesOrderByWithRelationInputSchema ]).optional(),
  cursor: zonesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ZonesScalarFieldEnumSchema,ZonesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const zonesAggregateArgsSchema: z.ZodType<Prisma.zonesAggregateArgs> = z.object({
  where: zonesWhereInputSchema.optional(),
  orderBy: z.union([ zonesOrderByWithRelationInputSchema.array(),zonesOrderByWithRelationInputSchema ]).optional(),
  cursor: zonesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const zonesGroupByArgsSchema: z.ZodType<Prisma.zonesGroupByArgs> = z.object({
  where: zonesWhereInputSchema.optional(),
  orderBy: z.union([ zonesOrderByWithAggregationInputSchema.array(),zonesOrderByWithAggregationInputSchema ]).optional(),
  by: ZonesScalarFieldEnumSchema.array(),
  having: zonesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const zonesFindUniqueArgsSchema: z.ZodType<Prisma.zonesFindUniqueArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereUniqueInputSchema,
}).strict() ;

export const zonesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.zonesFindUniqueOrThrowArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereUniqueInputSchema,
}).strict() ;

export const feedbackFindFirstArgsSchema: z.ZodType<Prisma.feedbackFindFirstArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereInputSchema.optional(),
  orderBy: z.union([ feedbackOrderByWithRelationInputSchema.array(),feedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: feedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeedbackScalarFieldEnumSchema,FeedbackScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const feedbackFindFirstOrThrowArgsSchema: z.ZodType<Prisma.feedbackFindFirstOrThrowArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereInputSchema.optional(),
  orderBy: z.union([ feedbackOrderByWithRelationInputSchema.array(),feedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: feedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeedbackScalarFieldEnumSchema,FeedbackScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const feedbackFindManyArgsSchema: z.ZodType<Prisma.feedbackFindManyArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereInputSchema.optional(),
  orderBy: z.union([ feedbackOrderByWithRelationInputSchema.array(),feedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: feedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeedbackScalarFieldEnumSchema,FeedbackScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const feedbackAggregateArgsSchema: z.ZodType<Prisma.feedbackAggregateArgs> = z.object({
  where: feedbackWhereInputSchema.optional(),
  orderBy: z.union([ feedbackOrderByWithRelationInputSchema.array(),feedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: feedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const feedbackGroupByArgsSchema: z.ZodType<Prisma.feedbackGroupByArgs> = z.object({
  where: feedbackWhereInputSchema.optional(),
  orderBy: z.union([ feedbackOrderByWithAggregationInputSchema.array(),feedbackOrderByWithAggregationInputSchema ]).optional(),
  by: FeedbackScalarFieldEnumSchema.array(),
  having: feedbackScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const feedbackFindUniqueArgsSchema: z.ZodType<Prisma.feedbackFindUniqueArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereUniqueInputSchema,
}).strict() ;

export const feedbackFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.feedbackFindUniqueOrThrowArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereUniqueInputSchema,
}).strict() ;

export const available_products_viewFindFirstArgsSchema: z.ZodType<Prisma.available_products_viewFindFirstArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereInputSchema.optional(),
  orderBy: z.union([ available_products_viewOrderByWithRelationInputSchema.array(),available_products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: available_products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Available_products_viewScalarFieldEnumSchema,Available_products_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const available_products_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.available_products_viewFindFirstOrThrowArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereInputSchema.optional(),
  orderBy: z.union([ available_products_viewOrderByWithRelationInputSchema.array(),available_products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: available_products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Available_products_viewScalarFieldEnumSchema,Available_products_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const available_products_viewFindManyArgsSchema: z.ZodType<Prisma.available_products_viewFindManyArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereInputSchema.optional(),
  orderBy: z.union([ available_products_viewOrderByWithRelationInputSchema.array(),available_products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: available_products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Available_products_viewScalarFieldEnumSchema,Available_products_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const available_products_viewAggregateArgsSchema: z.ZodType<Prisma.available_products_viewAggregateArgs> = z.object({
  where: available_products_viewWhereInputSchema.optional(),
  orderBy: z.union([ available_products_viewOrderByWithRelationInputSchema.array(),available_products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: available_products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const available_products_viewGroupByArgsSchema: z.ZodType<Prisma.available_products_viewGroupByArgs> = z.object({
  where: available_products_viewWhereInputSchema.optional(),
  orderBy: z.union([ available_products_viewOrderByWithAggregationInputSchema.array(),available_products_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Available_products_viewScalarFieldEnumSchema.array(),
  having: available_products_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const available_products_viewFindUniqueArgsSchema: z.ZodType<Prisma.available_products_viewFindUniqueArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereUniqueInputSchema,
}).strict() ;

export const available_products_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.available_products_viewFindUniqueOrThrowArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereUniqueInputSchema,
}).strict() ;

export const brands_viewFindFirstArgsSchema: z.ZodType<Prisma.brands_viewFindFirstArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereInputSchema.optional(),
  orderBy: z.union([ brands_viewOrderByWithRelationInputSchema.array(),brands_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: brands_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Brands_viewScalarFieldEnumSchema,Brands_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const brands_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.brands_viewFindFirstOrThrowArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereInputSchema.optional(),
  orderBy: z.union([ brands_viewOrderByWithRelationInputSchema.array(),brands_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: brands_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Brands_viewScalarFieldEnumSchema,Brands_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const brands_viewFindManyArgsSchema: z.ZodType<Prisma.brands_viewFindManyArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereInputSchema.optional(),
  orderBy: z.union([ brands_viewOrderByWithRelationInputSchema.array(),brands_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: brands_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Brands_viewScalarFieldEnumSchema,Brands_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const brands_viewAggregateArgsSchema: z.ZodType<Prisma.brands_viewAggregateArgs> = z.object({
  where: brands_viewWhereInputSchema.optional(),
  orderBy: z.union([ brands_viewOrderByWithRelationInputSchema.array(),brands_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: brands_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const brands_viewGroupByArgsSchema: z.ZodType<Prisma.brands_viewGroupByArgs> = z.object({
  where: brands_viewWhereInputSchema.optional(),
  orderBy: z.union([ brands_viewOrderByWithAggregationInputSchema.array(),brands_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Brands_viewScalarFieldEnumSchema.array(),
  having: brands_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const brands_viewFindUniqueArgsSchema: z.ZodType<Prisma.brands_viewFindUniqueArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereUniqueInputSchema,
}).strict() ;

export const brands_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.brands_viewFindUniqueOrThrowArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereUniqueInputSchema,
}).strict() ;

export const categories_viewFindFirstArgsSchema: z.ZodType<Prisma.categories_viewFindFirstArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereInputSchema.optional(),
  orderBy: z.union([ categories_viewOrderByWithRelationInputSchema.array(),categories_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: categories_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Categories_viewScalarFieldEnumSchema,Categories_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const categories_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.categories_viewFindFirstOrThrowArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereInputSchema.optional(),
  orderBy: z.union([ categories_viewOrderByWithRelationInputSchema.array(),categories_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: categories_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Categories_viewScalarFieldEnumSchema,Categories_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const categories_viewFindManyArgsSchema: z.ZodType<Prisma.categories_viewFindManyArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereInputSchema.optional(),
  orderBy: z.union([ categories_viewOrderByWithRelationInputSchema.array(),categories_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: categories_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Categories_viewScalarFieldEnumSchema,Categories_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const categories_viewAggregateArgsSchema: z.ZodType<Prisma.categories_viewAggregateArgs> = z.object({
  where: categories_viewWhereInputSchema.optional(),
  orderBy: z.union([ categories_viewOrderByWithRelationInputSchema.array(),categories_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: categories_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const categories_viewGroupByArgsSchema: z.ZodType<Prisma.categories_viewGroupByArgs> = z.object({
  where: categories_viewWhereInputSchema.optional(),
  orderBy: z.union([ categories_viewOrderByWithAggregationInputSchema.array(),categories_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Categories_viewScalarFieldEnumSchema.array(),
  having: categories_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const categories_viewFindUniqueArgsSchema: z.ZodType<Prisma.categories_viewFindUniqueArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereUniqueInputSchema,
}).strict() ;

export const categories_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.categories_viewFindUniqueOrThrowArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereUniqueInputSchema,
}).strict() ;

export const items_from_loansFindFirstArgsSchema: z.ZodType<Prisma.items_from_loansFindFirstArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereInputSchema.optional(),
  orderBy: z.union([ items_from_loansOrderByWithRelationInputSchema.array(),items_from_loansOrderByWithRelationInputSchema ]).optional(),
  cursor: items_from_loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_from_loansScalarFieldEnumSchema,Items_from_loansScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_from_loansFindFirstOrThrowArgsSchema: z.ZodType<Prisma.items_from_loansFindFirstOrThrowArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereInputSchema.optional(),
  orderBy: z.union([ items_from_loansOrderByWithRelationInputSchema.array(),items_from_loansOrderByWithRelationInputSchema ]).optional(),
  cursor: items_from_loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_from_loansScalarFieldEnumSchema,Items_from_loansScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_from_loansFindManyArgsSchema: z.ZodType<Prisma.items_from_loansFindManyArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereInputSchema.optional(),
  orderBy: z.union([ items_from_loansOrderByWithRelationInputSchema.array(),items_from_loansOrderByWithRelationInputSchema ]).optional(),
  cursor: items_from_loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_from_loansScalarFieldEnumSchema,Items_from_loansScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_from_loansAggregateArgsSchema: z.ZodType<Prisma.items_from_loansAggregateArgs> = z.object({
  where: items_from_loansWhereInputSchema.optional(),
  orderBy: z.union([ items_from_loansOrderByWithRelationInputSchema.array(),items_from_loansOrderByWithRelationInputSchema ]).optional(),
  cursor: items_from_loansWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_from_loansGroupByArgsSchema: z.ZodType<Prisma.items_from_loansGroupByArgs> = z.object({
  where: items_from_loansWhereInputSchema.optional(),
  orderBy: z.union([ items_from_loansOrderByWithAggregationInputSchema.array(),items_from_loansOrderByWithAggregationInputSchema ]).optional(),
  by: Items_from_loansScalarFieldEnumSchema.array(),
  having: items_from_loansScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_from_loansFindUniqueArgsSchema: z.ZodType<Prisma.items_from_loansFindUniqueArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereUniqueInputSchema,
}).strict() ;

export const items_from_loansFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.items_from_loansFindUniqueOrThrowArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereUniqueInputSchema,
}).strict() ;

export const items_viewFindFirstArgsSchema: z.ZodType<Prisma.items_viewFindFirstArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereInputSchema.optional(),
  orderBy: z.union([ items_viewOrderByWithRelationInputSchema.array(),items_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: items_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_viewScalarFieldEnumSchema,Items_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.items_viewFindFirstOrThrowArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereInputSchema.optional(),
  orderBy: z.union([ items_viewOrderByWithRelationInputSchema.array(),items_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: items_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_viewScalarFieldEnumSchema,Items_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_viewFindManyArgsSchema: z.ZodType<Prisma.items_viewFindManyArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereInputSchema.optional(),
  orderBy: z.union([ items_viewOrderByWithRelationInputSchema.array(),items_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: items_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_viewScalarFieldEnumSchema,Items_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_viewAggregateArgsSchema: z.ZodType<Prisma.items_viewAggregateArgs> = z.object({
  where: items_viewWhereInputSchema.optional(),
  orderBy: z.union([ items_viewOrderByWithRelationInputSchema.array(),items_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: items_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_viewGroupByArgsSchema: z.ZodType<Prisma.items_viewGroupByArgs> = z.object({
  where: items_viewWhereInputSchema.optional(),
  orderBy: z.union([ items_viewOrderByWithAggregationInputSchema.array(),items_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Items_viewScalarFieldEnumSchema.array(),
  having: items_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_viewFindUniqueArgsSchema: z.ZodType<Prisma.items_viewFindUniqueArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereUniqueInputSchema,
}).strict() ;

export const items_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.items_viewFindUniqueOrThrowArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereUniqueInputSchema,
}).strict() ;

export const loans_viewFindFirstArgsSchema: z.ZodType<Prisma.loans_viewFindFirstArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereInputSchema.optional(),
  orderBy: z.union([ loans_viewOrderByWithRelationInputSchema.array(),loans_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Loans_viewScalarFieldEnumSchema,Loans_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loans_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.loans_viewFindFirstOrThrowArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereInputSchema.optional(),
  orderBy: z.union([ loans_viewOrderByWithRelationInputSchema.array(),loans_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Loans_viewScalarFieldEnumSchema,Loans_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loans_viewFindManyArgsSchema: z.ZodType<Prisma.loans_viewFindManyArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereInputSchema.optional(),
  orderBy: z.union([ loans_viewOrderByWithRelationInputSchema.array(),loans_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Loans_viewScalarFieldEnumSchema,Loans_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loans_viewAggregateArgsSchema: z.ZodType<Prisma.loans_viewAggregateArgs> = z.object({
  where: loans_viewWhereInputSchema.optional(),
  orderBy: z.union([ loans_viewOrderByWithRelationInputSchema.array(),loans_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const loans_viewGroupByArgsSchema: z.ZodType<Prisma.loans_viewGroupByArgs> = z.object({
  where: loans_viewWhereInputSchema.optional(),
  orderBy: z.union([ loans_viewOrderByWithAggregationInputSchema.array(),loans_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Loans_viewScalarFieldEnumSchema.array(),
  having: loans_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const loans_viewFindUniqueArgsSchema: z.ZodType<Prisma.loans_viewFindUniqueArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereUniqueInputSchema,
}).strict() ;

export const loans_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.loans_viewFindUniqueOrThrowArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereUniqueInputSchema,
}).strict() ;

export const loans_view_extendedFindFirstArgsSchema: z.ZodType<Prisma.loans_view_extendedFindFirstArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereInputSchema.optional(),
  orderBy: z.union([ loans_view_extendedOrderByWithRelationInputSchema.array(),loans_view_extendedOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_view_extendedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Loans_view_extendedScalarFieldEnumSchema,Loans_view_extendedScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loans_view_extendedFindFirstOrThrowArgsSchema: z.ZodType<Prisma.loans_view_extendedFindFirstOrThrowArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereInputSchema.optional(),
  orderBy: z.union([ loans_view_extendedOrderByWithRelationInputSchema.array(),loans_view_extendedOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_view_extendedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Loans_view_extendedScalarFieldEnumSchema,Loans_view_extendedScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loans_view_extendedFindManyArgsSchema: z.ZodType<Prisma.loans_view_extendedFindManyArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereInputSchema.optional(),
  orderBy: z.union([ loans_view_extendedOrderByWithRelationInputSchema.array(),loans_view_extendedOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_view_extendedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Loans_view_extendedScalarFieldEnumSchema,Loans_view_extendedScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const loans_view_extendedAggregateArgsSchema: z.ZodType<Prisma.loans_view_extendedAggregateArgs> = z.object({
  where: loans_view_extendedWhereInputSchema.optional(),
  orderBy: z.union([ loans_view_extendedOrderByWithRelationInputSchema.array(),loans_view_extendedOrderByWithRelationInputSchema ]).optional(),
  cursor: loans_view_extendedWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const loans_view_extendedGroupByArgsSchema: z.ZodType<Prisma.loans_view_extendedGroupByArgs> = z.object({
  where: loans_view_extendedWhereInputSchema.optional(),
  orderBy: z.union([ loans_view_extendedOrderByWithAggregationInputSchema.array(),loans_view_extendedOrderByWithAggregationInputSchema ]).optional(),
  by: Loans_view_extendedScalarFieldEnumSchema.array(),
  having: loans_view_extendedScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const loans_view_extendedFindUniqueArgsSchema: z.ZodType<Prisma.loans_view_extendedFindUniqueArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereUniqueInputSchema,
}).strict() ;

export const loans_view_extendedFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.loans_view_extendedFindUniqueOrThrowArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereUniqueInputSchema,
}).strict() ;

export const products_viewFindFirstArgsSchema: z.ZodType<Prisma.products_viewFindFirstArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereInputSchema.optional(),
  orderBy: z.union([ products_viewOrderByWithRelationInputSchema.array(),products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Products_viewScalarFieldEnumSchema,Products_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const products_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.products_viewFindFirstOrThrowArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereInputSchema.optional(),
  orderBy: z.union([ products_viewOrderByWithRelationInputSchema.array(),products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Products_viewScalarFieldEnumSchema,Products_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const products_viewFindManyArgsSchema: z.ZodType<Prisma.products_viewFindManyArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereInputSchema.optional(),
  orderBy: z.union([ products_viewOrderByWithRelationInputSchema.array(),products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Products_viewScalarFieldEnumSchema,Products_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const products_viewAggregateArgsSchema: z.ZodType<Prisma.products_viewAggregateArgs> = z.object({
  where: products_viewWhereInputSchema.optional(),
  orderBy: z.union([ products_viewOrderByWithRelationInputSchema.array(),products_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: products_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const products_viewGroupByArgsSchema: z.ZodType<Prisma.products_viewGroupByArgs> = z.object({
  where: products_viewWhereInputSchema.optional(),
  orderBy: z.union([ products_viewOrderByWithAggregationInputSchema.array(),products_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Products_viewScalarFieldEnumSchema.array(),
  having: products_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const products_viewFindUniqueArgsSchema: z.ZodType<Prisma.products_viewFindUniqueArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereUniqueInputSchema,
}).strict() ;

export const products_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.products_viewFindUniqueOrThrowArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereUniqueInputSchema,
}).strict() ;

export const users_viewFindFirstArgsSchema: z.ZodType<Prisma.users_viewFindFirstArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereInputSchema.optional(),
  orderBy: z.union([ users_viewOrderByWithRelationInputSchema.array(),users_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: users_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Users_viewScalarFieldEnumSchema,Users_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const users_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.users_viewFindFirstOrThrowArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereInputSchema.optional(),
  orderBy: z.union([ users_viewOrderByWithRelationInputSchema.array(),users_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: users_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Users_viewScalarFieldEnumSchema,Users_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const users_viewFindManyArgsSchema: z.ZodType<Prisma.users_viewFindManyArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereInputSchema.optional(),
  orderBy: z.union([ users_viewOrderByWithRelationInputSchema.array(),users_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: users_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Users_viewScalarFieldEnumSchema,Users_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const users_viewAggregateArgsSchema: z.ZodType<Prisma.users_viewAggregateArgs> = z.object({
  where: users_viewWhereInputSchema.optional(),
  orderBy: z.union([ users_viewOrderByWithRelationInputSchema.array(),users_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: users_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const users_viewGroupByArgsSchema: z.ZodType<Prisma.users_viewGroupByArgs> = z.object({
  where: users_viewWhereInputSchema.optional(),
  orderBy: z.union([ users_viewOrderByWithAggregationInputSchema.array(),users_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Users_viewScalarFieldEnumSchema.array(),
  having: users_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const users_viewFindUniqueArgsSchema: z.ZodType<Prisma.users_viewFindUniqueArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereUniqueInputSchema,
}).strict() ;

export const users_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.users_viewFindUniqueOrThrowArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereUniqueInputSchema,
}).strict() ;

export const product_status_viewFindFirstArgsSchema: z.ZodType<Prisma.product_status_viewFindFirstArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereInputSchema.optional(),
  orderBy: z.union([ product_status_viewOrderByWithRelationInputSchema.array(),product_status_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: product_status_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Product_status_viewScalarFieldEnumSchema,Product_status_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const product_status_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.product_status_viewFindFirstOrThrowArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereInputSchema.optional(),
  orderBy: z.union([ product_status_viewOrderByWithRelationInputSchema.array(),product_status_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: product_status_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Product_status_viewScalarFieldEnumSchema,Product_status_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const product_status_viewFindManyArgsSchema: z.ZodType<Prisma.product_status_viewFindManyArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereInputSchema.optional(),
  orderBy: z.union([ product_status_viewOrderByWithRelationInputSchema.array(),product_status_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: product_status_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Product_status_viewScalarFieldEnumSchema,Product_status_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const product_status_viewAggregateArgsSchema: z.ZodType<Prisma.product_status_viewAggregateArgs> = z.object({
  where: product_status_viewWhereInputSchema.optional(),
  orderBy: z.union([ product_status_viewOrderByWithRelationInputSchema.array(),product_status_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: product_status_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const product_status_viewGroupByArgsSchema: z.ZodType<Prisma.product_status_viewGroupByArgs> = z.object({
  where: product_status_viewWhereInputSchema.optional(),
  orderBy: z.union([ product_status_viewOrderByWithAggregationInputSchema.array(),product_status_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Product_status_viewScalarFieldEnumSchema.array(),
  having: product_status_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const product_status_viewFindUniqueArgsSchema: z.ZodType<Prisma.product_status_viewFindUniqueArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereUniqueInputSchema,
}).strict() ;

export const product_status_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.product_status_viewFindUniqueOrThrowArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereUniqueInputSchema,
}).strict() ;

export const items_without_statusFindFirstArgsSchema: z.ZodType<Prisma.items_without_statusFindFirstArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_without_statusOrderByWithRelationInputSchema.array(),items_without_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_without_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_without_statusScalarFieldEnumSchema,Items_without_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_without_statusFindFirstOrThrowArgsSchema: z.ZodType<Prisma.items_without_statusFindFirstOrThrowArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_without_statusOrderByWithRelationInputSchema.array(),items_without_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_without_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_without_statusScalarFieldEnumSchema,Items_without_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_without_statusFindManyArgsSchema: z.ZodType<Prisma.items_without_statusFindManyArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_without_statusOrderByWithRelationInputSchema.array(),items_without_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_without_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_without_statusScalarFieldEnumSchema,Items_without_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_without_statusAggregateArgsSchema: z.ZodType<Prisma.items_without_statusAggregateArgs> = z.object({
  where: items_without_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_without_statusOrderByWithRelationInputSchema.array(),items_without_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_without_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_without_statusGroupByArgsSchema: z.ZodType<Prisma.items_without_statusGroupByArgs> = z.object({
  where: items_without_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_without_statusOrderByWithAggregationInputSchema.array(),items_without_statusOrderByWithAggregationInputSchema ]).optional(),
  by: Items_without_statusScalarFieldEnumSchema.array(),
  having: items_without_statusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_without_statusFindUniqueArgsSchema: z.ZodType<Prisma.items_without_statusFindUniqueArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereUniqueInputSchema,
}).strict() ;

export const items_without_statusFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.items_without_statusFindUniqueOrThrowArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereUniqueInputSchema,
}).strict() ;

export const items_with_statusFindFirstArgsSchema: z.ZodType<Prisma.items_with_statusFindFirstArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_with_statusOrderByWithRelationInputSchema.array(),items_with_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_with_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_with_statusScalarFieldEnumSchema,Items_with_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_with_statusFindFirstOrThrowArgsSchema: z.ZodType<Prisma.items_with_statusFindFirstOrThrowArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_with_statusOrderByWithRelationInputSchema.array(),items_with_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_with_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_with_statusScalarFieldEnumSchema,Items_with_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_with_statusFindManyArgsSchema: z.ZodType<Prisma.items_with_statusFindManyArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_with_statusOrderByWithRelationInputSchema.array(),items_with_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_with_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Items_with_statusScalarFieldEnumSchema,Items_with_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const items_with_statusAggregateArgsSchema: z.ZodType<Prisma.items_with_statusAggregateArgs> = z.object({
  where: items_with_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_with_statusOrderByWithRelationInputSchema.array(),items_with_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: items_with_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_with_statusGroupByArgsSchema: z.ZodType<Prisma.items_with_statusGroupByArgs> = z.object({
  where: items_with_statusWhereInputSchema.optional(),
  orderBy: z.union([ items_with_statusOrderByWithAggregationInputSchema.array(),items_with_statusOrderByWithAggregationInputSchema ]).optional(),
  by: Items_with_statusScalarFieldEnumSchema.array(),
  having: items_with_statusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const items_with_statusFindUniqueArgsSchema: z.ZodType<Prisma.items_with_statusFindUniqueArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereUniqueInputSchema,
}).strict() ;

export const items_with_statusFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.items_with_statusFindUniqueOrThrowArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereUniqueInputSchema,
}).strict() ;

export const zones_viewFindFirstArgsSchema: z.ZodType<Prisma.zones_viewFindFirstArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereInputSchema.optional(),
  orderBy: z.union([ zones_viewOrderByWithRelationInputSchema.array(),zones_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: zones_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Zones_viewScalarFieldEnumSchema,Zones_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const zones_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.zones_viewFindFirstOrThrowArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereInputSchema.optional(),
  orderBy: z.union([ zones_viewOrderByWithRelationInputSchema.array(),zones_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: zones_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Zones_viewScalarFieldEnumSchema,Zones_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const zones_viewFindManyArgsSchema: z.ZodType<Prisma.zones_viewFindManyArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereInputSchema.optional(),
  orderBy: z.union([ zones_viewOrderByWithRelationInputSchema.array(),zones_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: zones_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Zones_viewScalarFieldEnumSchema,Zones_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const zones_viewAggregateArgsSchema: z.ZodType<Prisma.zones_viewAggregateArgs> = z.object({
  where: zones_viewWhereInputSchema.optional(),
  orderBy: z.union([ zones_viewOrderByWithRelationInputSchema.array(),zones_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: zones_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const zones_viewGroupByArgsSchema: z.ZodType<Prisma.zones_viewGroupByArgs> = z.object({
  where: zones_viewWhereInputSchema.optional(),
  orderBy: z.union([ zones_viewOrderByWithAggregationInputSchema.array(),zones_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Zones_viewScalarFieldEnumSchema.array(),
  having: zones_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const zones_viewFindUniqueArgsSchema: z.ZodType<Prisma.zones_viewFindUniqueArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereUniqueInputSchema,
}).strict() ;

export const zones_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.zones_viewFindUniqueOrThrowArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereUniqueInputSchema,
}).strict() ;

export const buildings_viewFindFirstArgsSchema: z.ZodType<Prisma.buildings_viewFindFirstArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereInputSchema.optional(),
  orderBy: z.union([ buildings_viewOrderByWithRelationInputSchema.array(),buildings_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: buildings_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Buildings_viewScalarFieldEnumSchema,Buildings_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const buildings_viewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.buildings_viewFindFirstOrThrowArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereInputSchema.optional(),
  orderBy: z.union([ buildings_viewOrderByWithRelationInputSchema.array(),buildings_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: buildings_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Buildings_viewScalarFieldEnumSchema,Buildings_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const buildings_viewFindManyArgsSchema: z.ZodType<Prisma.buildings_viewFindManyArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereInputSchema.optional(),
  orderBy: z.union([ buildings_viewOrderByWithRelationInputSchema.array(),buildings_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: buildings_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Buildings_viewScalarFieldEnumSchema,Buildings_viewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const buildings_viewAggregateArgsSchema: z.ZodType<Prisma.buildings_viewAggregateArgs> = z.object({
  where: buildings_viewWhereInputSchema.optional(),
  orderBy: z.union([ buildings_viewOrderByWithRelationInputSchema.array(),buildings_viewOrderByWithRelationInputSchema ]).optional(),
  cursor: buildings_viewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const buildings_viewGroupByArgsSchema: z.ZodType<Prisma.buildings_viewGroupByArgs> = z.object({
  where: buildings_viewWhereInputSchema.optional(),
  orderBy: z.union([ buildings_viewOrderByWithAggregationInputSchema.array(),buildings_viewOrderByWithAggregationInputSchema ]).optional(),
  by: Buildings_viewScalarFieldEnumSchema.array(),
  having: buildings_viewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const buildings_viewFindUniqueArgsSchema: z.ZodType<Prisma.buildings_viewFindUniqueArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereUniqueInputSchema,
}).strict() ;

export const buildings_viewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.buildings_viewFindUniqueOrThrowArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereUniqueInputSchema,
}).strict() ;

export const brandsCreateArgsSchema: z.ZodType<Prisma.brandsCreateArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  data: z.union([ brandsCreateInputSchema,brandsUncheckedCreateInputSchema ]),
}).strict() ;

export const brandsUpsertArgsSchema: z.ZodType<Prisma.brandsUpsertArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereUniqueInputSchema,
  create: z.union([ brandsCreateInputSchema,brandsUncheckedCreateInputSchema ]),
  update: z.union([ brandsUpdateInputSchema,brandsUncheckedUpdateInputSchema ]),
}).strict() ;

export const brandsCreateManyArgsSchema: z.ZodType<Prisma.brandsCreateManyArgs> = z.object({
  data: z.union([ brandsCreateManyInputSchema,brandsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const brandsDeleteArgsSchema: z.ZodType<Prisma.brandsDeleteArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  where: brandsWhereUniqueInputSchema,
}).strict() ;

export const brandsUpdateArgsSchema: z.ZodType<Prisma.brandsUpdateArgs> = z.object({
  select: brandsSelectSchema.optional(),
  include: brandsIncludeSchema.optional(),
  data: z.union([ brandsUpdateInputSchema,brandsUncheckedUpdateInputSchema ]),
  where: brandsWhereUniqueInputSchema,
}).strict() ;

export const brandsUpdateManyArgsSchema: z.ZodType<Prisma.brandsUpdateManyArgs> = z.object({
  data: z.union([ brandsUpdateManyMutationInputSchema,brandsUncheckedUpdateManyInputSchema ]),
  where: brandsWhereInputSchema.optional(),
}).strict() ;

export const brandsDeleteManyArgsSchema: z.ZodType<Prisma.brandsDeleteManyArgs> = z.object({
  where: brandsWhereInputSchema.optional(),
}).strict() ;

export const buildingsCreateArgsSchema: z.ZodType<Prisma.buildingsCreateArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  data: z.union([ buildingsCreateInputSchema,buildingsUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const buildingsUpsertArgsSchema: z.ZodType<Prisma.buildingsUpsertArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereUniqueInputSchema,
  create: z.union([ buildingsCreateInputSchema,buildingsUncheckedCreateInputSchema ]),
  update: z.union([ buildingsUpdateInputSchema,buildingsUncheckedUpdateInputSchema ]),
}).strict() ;

export const buildingsCreateManyArgsSchema: z.ZodType<Prisma.buildingsCreateManyArgs> = z.object({
  data: z.union([ buildingsCreateManyInputSchema,buildingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const buildingsDeleteArgsSchema: z.ZodType<Prisma.buildingsDeleteArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  where: buildingsWhereUniqueInputSchema,
}).strict() ;

export const buildingsUpdateArgsSchema: z.ZodType<Prisma.buildingsUpdateArgs> = z.object({
  select: buildingsSelectSchema.optional(),
  include: buildingsIncludeSchema.optional(),
  data: z.union([ buildingsUpdateInputSchema,buildingsUncheckedUpdateInputSchema ]),
  where: buildingsWhereUniqueInputSchema,
}).strict() ;

export const buildingsUpdateManyArgsSchema: z.ZodType<Prisma.buildingsUpdateManyArgs> = z.object({
  data: z.union([ buildingsUpdateManyMutationInputSchema,buildingsUncheckedUpdateManyInputSchema ]),
  where: buildingsWhereInputSchema.optional(),
}).strict() ;

export const buildingsDeleteManyArgsSchema: z.ZodType<Prisma.buildingsDeleteManyArgs> = z.object({
  where: buildingsWhereInputSchema.optional(),
}).strict() ;

export const categoriesCreateArgsSchema: z.ZodType<Prisma.categoriesCreateArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  data: z.union([ categoriesCreateInputSchema,categoriesUncheckedCreateInputSchema ]),
}).strict() ;

export const categoriesUpsertArgsSchema: z.ZodType<Prisma.categoriesUpsertArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereUniqueInputSchema,
  create: z.union([ categoriesCreateInputSchema,categoriesUncheckedCreateInputSchema ]),
  update: z.union([ categoriesUpdateInputSchema,categoriesUncheckedUpdateInputSchema ]),
}).strict() ;

export const categoriesCreateManyArgsSchema: z.ZodType<Prisma.categoriesCreateManyArgs> = z.object({
  data: z.union([ categoriesCreateManyInputSchema,categoriesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const categoriesDeleteArgsSchema: z.ZodType<Prisma.categoriesDeleteArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereUniqueInputSchema,
}).strict() ;

export const categoriesUpdateArgsSchema: z.ZodType<Prisma.categoriesUpdateArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  data: z.union([ categoriesUpdateInputSchema,categoriesUncheckedUpdateInputSchema ]),
  where: categoriesWhereUniqueInputSchema,
}).strict() ;

export const categoriesUpdateManyArgsSchema: z.ZodType<Prisma.categoriesUpdateManyArgs> = z.object({
  data: z.union([ categoriesUpdateManyMutationInputSchema,categoriesUncheckedUpdateManyInputSchema ]),
  where: categoriesWhereInputSchema.optional(),
}).strict() ;

export const categoriesDeleteManyArgsSchema: z.ZodType<Prisma.categoriesDeleteManyArgs> = z.object({
  where: categoriesWhereInputSchema.optional(),
}).strict() ;

export const itemsCreateArgsSchema: z.ZodType<Prisma.itemsCreateArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  data: z.union([ itemsCreateInputSchema,itemsUncheckedCreateInputSchema ]),
}).strict() ;

export const itemsUpsertArgsSchema: z.ZodType<Prisma.itemsUpsertArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereUniqueInputSchema,
  create: z.union([ itemsCreateInputSchema,itemsUncheckedCreateInputSchema ]),
  update: z.union([ itemsUpdateInputSchema,itemsUncheckedUpdateInputSchema ]),
}).strict() ;

export const itemsCreateManyArgsSchema: z.ZodType<Prisma.itemsCreateManyArgs> = z.object({
  data: z.union([ itemsCreateManyInputSchema,itemsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const itemsDeleteArgsSchema: z.ZodType<Prisma.itemsDeleteArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  where: itemsWhereUniqueInputSchema,
}).strict() ;

export const itemsUpdateArgsSchema: z.ZodType<Prisma.itemsUpdateArgs> = z.object({
  select: itemsSelectSchema.optional(),
  include: itemsIncludeSchema.optional(),
  data: z.union([ itemsUpdateInputSchema,itemsUncheckedUpdateInputSchema ]),
  where: itemsWhereUniqueInputSchema,
}).strict() ;

export const itemsUpdateManyArgsSchema: z.ZodType<Prisma.itemsUpdateManyArgs> = z.object({
  data: z.union([ itemsUpdateManyMutationInputSchema,itemsUncheckedUpdateManyInputSchema ]),
  where: itemsWhereInputSchema.optional(),
}).strict() ;

export const itemsDeleteManyArgsSchema: z.ZodType<Prisma.itemsDeleteManyArgs> = z.object({
  where: itemsWhereInputSchema.optional(),
}).strict() ;

export const items_in_loanCreateArgsSchema: z.ZodType<Prisma.items_in_loanCreateArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  data: z.union([ items_in_loanCreateInputSchema,items_in_loanUncheckedCreateInputSchema ]),
}).strict() ;

export const items_in_loanUpsertArgsSchema: z.ZodType<Prisma.items_in_loanUpsertArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereUniqueInputSchema,
  create: z.union([ items_in_loanCreateInputSchema,items_in_loanUncheckedCreateInputSchema ]),
  update: z.union([ items_in_loanUpdateInputSchema,items_in_loanUncheckedUpdateInputSchema ]),
}).strict() ;

export const items_in_loanCreateManyArgsSchema: z.ZodType<Prisma.items_in_loanCreateManyArgs> = z.object({
  data: z.union([ items_in_loanCreateManyInputSchema,items_in_loanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const items_in_loanDeleteArgsSchema: z.ZodType<Prisma.items_in_loanDeleteArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  where: items_in_loanWhereUniqueInputSchema,
}).strict() ;

export const items_in_loanUpdateArgsSchema: z.ZodType<Prisma.items_in_loanUpdateArgs> = z.object({
  select: items_in_loanSelectSchema.optional(),
  include: items_in_loanIncludeSchema.optional(),
  data: z.union([ items_in_loanUpdateInputSchema,items_in_loanUncheckedUpdateInputSchema ]),
  where: items_in_loanWhereUniqueInputSchema,
}).strict() ;

export const items_in_loanUpdateManyArgsSchema: z.ZodType<Prisma.items_in_loanUpdateManyArgs> = z.object({
  data: z.union([ items_in_loanUpdateManyMutationInputSchema,items_in_loanUncheckedUpdateManyInputSchema ]),
  where: items_in_loanWhereInputSchema.optional(),
}).strict() ;

export const items_in_loanDeleteManyArgsSchema: z.ZodType<Prisma.items_in_loanDeleteManyArgs> = z.object({
  where: items_in_loanWhereInputSchema.optional(),
}).strict() ;

export const loansCreateArgsSchema: z.ZodType<Prisma.loansCreateArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  data: z.union([ loansCreateInputSchema,loansUncheckedCreateInputSchema ]),
}).strict() ;

export const loansUpsertArgsSchema: z.ZodType<Prisma.loansUpsertArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereUniqueInputSchema,
  create: z.union([ loansCreateInputSchema,loansUncheckedCreateInputSchema ]),
  update: z.union([ loansUpdateInputSchema,loansUncheckedUpdateInputSchema ]),
}).strict() ;

export const loansCreateManyArgsSchema: z.ZodType<Prisma.loansCreateManyArgs> = z.object({
  data: z.union([ loansCreateManyInputSchema,loansCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const loansDeleteArgsSchema: z.ZodType<Prisma.loansDeleteArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  where: loansWhereUniqueInputSchema,
}).strict() ;

export const loansUpdateArgsSchema: z.ZodType<Prisma.loansUpdateArgs> = z.object({
  select: loansSelectSchema.optional(),
  include: loansIncludeSchema.optional(),
  data: z.union([ loansUpdateInputSchema,loansUncheckedUpdateInputSchema ]),
  where: loansWhereUniqueInputSchema,
}).strict() ;

export const loansUpdateManyArgsSchema: z.ZodType<Prisma.loansUpdateManyArgs> = z.object({
  data: z.union([ loansUpdateManyMutationInputSchema,loansUncheckedUpdateManyInputSchema ]),
  where: loansWhereInputSchema.optional(),
}).strict() ;

export const loansDeleteManyArgsSchema: z.ZodType<Prisma.loansDeleteManyArgs> = z.object({
  where: loansWhereInputSchema.optional(),
}).strict() ;

export const pickup_locationsCreateArgsSchema: z.ZodType<Prisma.pickup_locationsCreateArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  data: z.union([ pickup_locationsCreateInputSchema,pickup_locationsUncheckedCreateInputSchema ]),
}).strict() ;

export const pickup_locationsUpsertArgsSchema: z.ZodType<Prisma.pickup_locationsUpsertArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereUniqueInputSchema,
  create: z.union([ pickup_locationsCreateInputSchema,pickup_locationsUncheckedCreateInputSchema ]),
  update: z.union([ pickup_locationsUpdateInputSchema,pickup_locationsUncheckedUpdateInputSchema ]),
}).strict() ;

export const pickup_locationsCreateManyArgsSchema: z.ZodType<Prisma.pickup_locationsCreateManyArgs> = z.object({
  data: z.union([ pickup_locationsCreateManyInputSchema,pickup_locationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const pickup_locationsDeleteArgsSchema: z.ZodType<Prisma.pickup_locationsDeleteArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  where: pickup_locationsWhereUniqueInputSchema,
}).strict() ;

export const pickup_locationsUpdateArgsSchema: z.ZodType<Prisma.pickup_locationsUpdateArgs> = z.object({
  select: pickup_locationsSelectSchema.optional(),
  data: z.union([ pickup_locationsUpdateInputSchema,pickup_locationsUncheckedUpdateInputSchema ]),
  where: pickup_locationsWhereUniqueInputSchema,
}).strict() ;

export const pickup_locationsUpdateManyArgsSchema: z.ZodType<Prisma.pickup_locationsUpdateManyArgs> = z.object({
  data: z.union([ pickup_locationsUpdateManyMutationInputSchema,pickup_locationsUncheckedUpdateManyInputSchema ]),
  where: pickup_locationsWhereInputSchema.optional(),
}).strict() ;

export const pickup_locationsDeleteManyArgsSchema: z.ZodType<Prisma.pickup_locationsDeleteManyArgs> = z.object({
  where: pickup_locationsWhereInputSchema.optional(),
}).strict() ;

export const product_statusCreateArgsSchema: z.ZodType<Prisma.product_statusCreateArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  data: z.union([ product_statusCreateInputSchema,product_statusUncheckedCreateInputSchema ]),
}).strict() ;

export const product_statusUpsertArgsSchema: z.ZodType<Prisma.product_statusUpsertArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereUniqueInputSchema,
  create: z.union([ product_statusCreateInputSchema,product_statusUncheckedCreateInputSchema ]),
  update: z.union([ product_statusUpdateInputSchema,product_statusUncheckedUpdateInputSchema ]),
}).strict() ;

export const product_statusCreateManyArgsSchema: z.ZodType<Prisma.product_statusCreateManyArgs> = z.object({
  data: z.union([ product_statusCreateManyInputSchema,product_statusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const product_statusDeleteArgsSchema: z.ZodType<Prisma.product_statusDeleteArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  where: product_statusWhereUniqueInputSchema,
}).strict() ;

export const product_statusUpdateArgsSchema: z.ZodType<Prisma.product_statusUpdateArgs> = z.object({
  select: product_statusSelectSchema.optional(),
  include: product_statusIncludeSchema.optional(),
  data: z.union([ product_statusUpdateInputSchema,product_statusUncheckedUpdateInputSchema ]),
  where: product_statusWhereUniqueInputSchema,
}).strict() ;

export const product_statusUpdateManyArgsSchema: z.ZodType<Prisma.product_statusUpdateManyArgs> = z.object({
  data: z.union([ product_statusUpdateManyMutationInputSchema,product_statusUncheckedUpdateManyInputSchema ]),
  where: product_statusWhereInputSchema.optional(),
}).strict() ;

export const product_statusDeleteManyArgsSchema: z.ZodType<Prisma.product_statusDeleteManyArgs> = z.object({
  where: product_statusWhereInputSchema.optional(),
}).strict() ;

export const productsCreateArgsSchema: z.ZodType<Prisma.productsCreateArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  data: z.union([ productsCreateInputSchema,productsUncheckedCreateInputSchema ]),
}).strict() ;

export const productsUpsertArgsSchema: z.ZodType<Prisma.productsUpsertArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereUniqueInputSchema,
  create: z.union([ productsCreateInputSchema,productsUncheckedCreateInputSchema ]),
  update: z.union([ productsUpdateInputSchema,productsUncheckedUpdateInputSchema ]),
}).strict() ;

export const productsCreateManyArgsSchema: z.ZodType<Prisma.productsCreateManyArgs> = z.object({
  data: z.union([ productsCreateManyInputSchema,productsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const productsDeleteArgsSchema: z.ZodType<Prisma.productsDeleteArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereUniqueInputSchema,
}).strict() ;

export const productsUpdateArgsSchema: z.ZodType<Prisma.productsUpdateArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  data: z.union([ productsUpdateInputSchema,productsUncheckedUpdateInputSchema ]),
  where: productsWhereUniqueInputSchema,
}).strict() ;

export const productsUpdateManyArgsSchema: z.ZodType<Prisma.productsUpdateManyArgs> = z.object({
  data: z.union([ productsUpdateManyMutationInputSchema,productsUncheckedUpdateManyInputSchema ]),
  where: productsWhereInputSchema.optional(),
}).strict() ;

export const productsDeleteManyArgsSchema: z.ZodType<Prisma.productsDeleteManyArgs> = z.object({
  where: productsWhereInputSchema.optional(),
}).strict() ;

export const recipient_typeCreateArgsSchema: z.ZodType<Prisma.recipient_typeCreateArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  data: z.union([ recipient_typeCreateInputSchema,recipient_typeUncheckedCreateInputSchema ]),
}).strict() ;

export const recipient_typeUpsertArgsSchema: z.ZodType<Prisma.recipient_typeUpsertArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereUniqueInputSchema,
  create: z.union([ recipient_typeCreateInputSchema,recipient_typeUncheckedCreateInputSchema ]),
  update: z.union([ recipient_typeUpdateInputSchema,recipient_typeUncheckedUpdateInputSchema ]),
}).strict() ;

export const recipient_typeCreateManyArgsSchema: z.ZodType<Prisma.recipient_typeCreateManyArgs> = z.object({
  data: z.union([ recipient_typeCreateManyInputSchema,recipient_typeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const recipient_typeDeleteArgsSchema: z.ZodType<Prisma.recipient_typeDeleteArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  where: recipient_typeWhereUniqueInputSchema,
}).strict() ;

export const recipient_typeUpdateArgsSchema: z.ZodType<Prisma.recipient_typeUpdateArgs> = z.object({
  select: recipient_typeSelectSchema.optional(),
  include: recipient_typeIncludeSchema.optional(),
  data: z.union([ recipient_typeUpdateInputSchema,recipient_typeUncheckedUpdateInputSchema ]),
  where: recipient_typeWhereUniqueInputSchema,
}).strict() ;

export const recipient_typeUpdateManyArgsSchema: z.ZodType<Prisma.recipient_typeUpdateManyArgs> = z.object({
  data: z.union([ recipient_typeUpdateManyMutationInputSchema,recipient_typeUncheckedUpdateManyInputSchema ]),
  where: recipient_typeWhereInputSchema.optional(),
}).strict() ;

export const recipient_typeDeleteManyArgsSchema: z.ZodType<Prisma.recipient_typeDeleteManyArgs> = z.object({
  where: recipient_typeWhereInputSchema.optional(),
}).strict() ;

export const selfservice_caseCreateArgsSchema: z.ZodType<Prisma.selfservice_caseCreateArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  data: z.union([ selfservice_caseCreateInputSchema,selfservice_caseUncheckedCreateInputSchema ]),
}).strict() ;

export const selfservice_caseUpsertArgsSchema: z.ZodType<Prisma.selfservice_caseUpsertArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereUniqueInputSchema,
  create: z.union([ selfservice_caseCreateInputSchema,selfservice_caseUncheckedCreateInputSchema ]),
  update: z.union([ selfservice_caseUpdateInputSchema,selfservice_caseUncheckedUpdateInputSchema ]),
}).strict() ;

export const selfservice_caseCreateManyArgsSchema: z.ZodType<Prisma.selfservice_caseCreateManyArgs> = z.object({
  data: z.union([ selfservice_caseCreateManyInputSchema,selfservice_caseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const selfservice_caseDeleteArgsSchema: z.ZodType<Prisma.selfservice_caseDeleteArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  where: selfservice_caseWhereUniqueInputSchema,
}).strict() ;

export const selfservice_caseUpdateArgsSchema: z.ZodType<Prisma.selfservice_caseUpdateArgs> = z.object({
  select: selfservice_caseSelectSchema.optional(),
  include: selfservice_caseIncludeSchema.optional(),
  data: z.union([ selfservice_caseUpdateInputSchema,selfservice_caseUncheckedUpdateInputSchema ]),
  where: selfservice_caseWhereUniqueInputSchema,
}).strict() ;

export const selfservice_caseUpdateManyArgsSchema: z.ZodType<Prisma.selfservice_caseUpdateManyArgs> = z.object({
  data: z.union([ selfservice_caseUpdateManyMutationInputSchema,selfservice_caseUncheckedUpdateManyInputSchema ]),
  where: selfservice_caseWhereInputSchema.optional(),
}).strict() ;

export const selfservice_caseDeleteManyArgsSchema: z.ZodType<Prisma.selfservice_caseDeleteManyArgs> = z.object({
  where: selfservice_caseWhereInputSchema.optional(),
}).strict() ;

export const storage_locationsCreateArgsSchema: z.ZodType<Prisma.storage_locationsCreateArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  data: z.union([ storage_locationsCreateInputSchema,storage_locationsUncheckedCreateInputSchema ]),
}).strict() ;

export const storage_locationsUpsertArgsSchema: z.ZodType<Prisma.storage_locationsUpsertArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereUniqueInputSchema,
  create: z.union([ storage_locationsCreateInputSchema,storage_locationsUncheckedCreateInputSchema ]),
  update: z.union([ storage_locationsUpdateInputSchema,storage_locationsUncheckedUpdateInputSchema ]),
}).strict() ;

export const storage_locationsCreateManyArgsSchema: z.ZodType<Prisma.storage_locationsCreateManyArgs> = z.object({
  data: z.union([ storage_locationsCreateManyInputSchema,storage_locationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const storage_locationsDeleteArgsSchema: z.ZodType<Prisma.storage_locationsDeleteArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  where: storage_locationsWhereUniqueInputSchema,
}).strict() ;

export const storage_locationsUpdateArgsSchema: z.ZodType<Prisma.storage_locationsUpdateArgs> = z.object({
  select: storage_locationsSelectSchema.optional(),
  include: storage_locationsIncludeSchema.optional(),
  data: z.union([ storage_locationsUpdateInputSchema,storage_locationsUncheckedUpdateInputSchema ]),
  where: storage_locationsWhereUniqueInputSchema,
}).strict() ;

export const storage_locationsUpdateManyArgsSchema: z.ZodType<Prisma.storage_locationsUpdateManyArgs> = z.object({
  data: z.union([ storage_locationsUpdateManyMutationInputSchema,storage_locationsUncheckedUpdateManyInputSchema ]),
  where: storage_locationsWhereInputSchema.optional(),
}).strict() ;

export const storage_locationsDeleteManyArgsSchema: z.ZodType<Prisma.storage_locationsDeleteManyArgs> = z.object({
  where: storage_locationsWhereInputSchema.optional(),
}).strict() ;

export const usersCreateArgsSchema: z.ZodType<Prisma.usersCreateArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  data: z.union([ usersCreateInputSchema,usersUncheckedCreateInputSchema ]),
}).strict() ;

export const usersUpsertArgsSchema: z.ZodType<Prisma.usersUpsertArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
  create: z.union([ usersCreateInputSchema,usersUncheckedCreateInputSchema ]),
  update: z.union([ usersUpdateInputSchema,usersUncheckedUpdateInputSchema ]),
}).strict() ;

export const usersCreateManyArgsSchema: z.ZodType<Prisma.usersCreateManyArgs> = z.object({
  data: z.union([ usersCreateManyInputSchema,usersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const usersDeleteArgsSchema: z.ZodType<Prisma.usersDeleteArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersUpdateArgsSchema: z.ZodType<Prisma.usersUpdateArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  data: z.union([ usersUpdateInputSchema,usersUncheckedUpdateInputSchema ]),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersUpdateManyArgsSchema: z.ZodType<Prisma.usersUpdateManyArgs> = z.object({
  data: z.union([ usersUpdateManyMutationInputSchema,usersUncheckedUpdateManyInputSchema ]),
  where: usersWhereInputSchema.optional(),
}).strict() ;

export const usersDeleteManyArgsSchema: z.ZodType<Prisma.usersDeleteManyArgs> = z.object({
  where: usersWhereInputSchema.optional(),
}).strict() ;

export const zonesCreateArgsSchema: z.ZodType<Prisma.zonesCreateArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  data: z.union([ zonesCreateInputSchema,zonesUncheckedCreateInputSchema ]),
}).strict() ;

export const zonesUpsertArgsSchema: z.ZodType<Prisma.zonesUpsertArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereUniqueInputSchema,
  create: z.union([ zonesCreateInputSchema,zonesUncheckedCreateInputSchema ]),
  update: z.union([ zonesUpdateInputSchema,zonesUncheckedUpdateInputSchema ]),
}).strict() ;

export const zonesCreateManyArgsSchema: z.ZodType<Prisma.zonesCreateManyArgs> = z.object({
  data: z.union([ zonesCreateManyInputSchema,zonesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const zonesDeleteArgsSchema: z.ZodType<Prisma.zonesDeleteArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  where: zonesWhereUniqueInputSchema,
}).strict() ;

export const zonesUpdateArgsSchema: z.ZodType<Prisma.zonesUpdateArgs> = z.object({
  select: zonesSelectSchema.optional(),
  include: zonesIncludeSchema.optional(),
  data: z.union([ zonesUpdateInputSchema,zonesUncheckedUpdateInputSchema ]),
  where: zonesWhereUniqueInputSchema,
}).strict() ;

export const zonesUpdateManyArgsSchema: z.ZodType<Prisma.zonesUpdateManyArgs> = z.object({
  data: z.union([ zonesUpdateManyMutationInputSchema,zonesUncheckedUpdateManyInputSchema ]),
  where: zonesWhereInputSchema.optional(),
}).strict() ;

export const zonesDeleteManyArgsSchema: z.ZodType<Prisma.zonesDeleteManyArgs> = z.object({
  where: zonesWhereInputSchema.optional(),
}).strict() ;

export const feedbackCreateArgsSchema: z.ZodType<Prisma.feedbackCreateArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  data: z.union([ feedbackCreateInputSchema,feedbackUncheckedCreateInputSchema ]),
}).strict() ;

export const feedbackUpsertArgsSchema: z.ZodType<Prisma.feedbackUpsertArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereUniqueInputSchema,
  create: z.union([ feedbackCreateInputSchema,feedbackUncheckedCreateInputSchema ]),
  update: z.union([ feedbackUpdateInputSchema,feedbackUncheckedUpdateInputSchema ]),
}).strict() ;

export const feedbackCreateManyArgsSchema: z.ZodType<Prisma.feedbackCreateManyArgs> = z.object({
  data: z.union([ feedbackCreateManyInputSchema,feedbackCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const feedbackDeleteArgsSchema: z.ZodType<Prisma.feedbackDeleteArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  where: feedbackWhereUniqueInputSchema,
}).strict() ;

export const feedbackUpdateArgsSchema: z.ZodType<Prisma.feedbackUpdateArgs> = z.object({
  select: feedbackSelectSchema.optional(),
  data: z.union([ feedbackUpdateInputSchema,feedbackUncheckedUpdateInputSchema ]),
  where: feedbackWhereUniqueInputSchema,
}).strict() ;

export const feedbackUpdateManyArgsSchema: z.ZodType<Prisma.feedbackUpdateManyArgs> = z.object({
  data: z.union([ feedbackUpdateManyMutationInputSchema,feedbackUncheckedUpdateManyInputSchema ]),
  where: feedbackWhereInputSchema.optional(),
}).strict() ;

export const feedbackDeleteManyArgsSchema: z.ZodType<Prisma.feedbackDeleteManyArgs> = z.object({
  where: feedbackWhereInputSchema.optional(),
}).strict() ;

export const available_products_viewCreateArgsSchema: z.ZodType<Prisma.available_products_viewCreateArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  data: z.union([ available_products_viewCreateInputSchema,available_products_viewUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const available_products_viewUpsertArgsSchema: z.ZodType<Prisma.available_products_viewUpsertArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereUniqueInputSchema,
  create: z.union([ available_products_viewCreateInputSchema,available_products_viewUncheckedCreateInputSchema ]),
  update: z.union([ available_products_viewUpdateInputSchema,available_products_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const available_products_viewCreateManyArgsSchema: z.ZodType<Prisma.available_products_viewCreateManyArgs> = z.object({
  data: z.union([ available_products_viewCreateManyInputSchema,available_products_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const available_products_viewDeleteArgsSchema: z.ZodType<Prisma.available_products_viewDeleteArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  where: available_products_viewWhereUniqueInputSchema,
}).strict() ;

export const available_products_viewUpdateArgsSchema: z.ZodType<Prisma.available_products_viewUpdateArgs> = z.object({
  select: available_products_viewSelectSchema.optional(),
  data: z.union([ available_products_viewUpdateInputSchema,available_products_viewUncheckedUpdateInputSchema ]),
  where: available_products_viewWhereUniqueInputSchema,
}).strict() ;

export const available_products_viewUpdateManyArgsSchema: z.ZodType<Prisma.available_products_viewUpdateManyArgs> = z.object({
  data: z.union([ available_products_viewUpdateManyMutationInputSchema,available_products_viewUncheckedUpdateManyInputSchema ]),
  where: available_products_viewWhereInputSchema.optional(),
}).strict() ;

export const available_products_viewDeleteManyArgsSchema: z.ZodType<Prisma.available_products_viewDeleteManyArgs> = z.object({
  where: available_products_viewWhereInputSchema.optional(),
}).strict() ;

export const brands_viewCreateArgsSchema: z.ZodType<Prisma.brands_viewCreateArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  data: z.union([ brands_viewCreateInputSchema,brands_viewUncheckedCreateInputSchema ]),
}).strict() ;

export const brands_viewUpsertArgsSchema: z.ZodType<Prisma.brands_viewUpsertArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereUniqueInputSchema,
  create: z.union([ brands_viewCreateInputSchema,brands_viewUncheckedCreateInputSchema ]),
  update: z.union([ brands_viewUpdateInputSchema,brands_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const brands_viewCreateManyArgsSchema: z.ZodType<Prisma.brands_viewCreateManyArgs> = z.object({
  data: z.union([ brands_viewCreateManyInputSchema,brands_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const brands_viewDeleteArgsSchema: z.ZodType<Prisma.brands_viewDeleteArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  where: brands_viewWhereUniqueInputSchema,
}).strict() ;

export const brands_viewUpdateArgsSchema: z.ZodType<Prisma.brands_viewUpdateArgs> = z.object({
  select: brands_viewSelectSchema.optional(),
  data: z.union([ brands_viewUpdateInputSchema,brands_viewUncheckedUpdateInputSchema ]),
  where: brands_viewWhereUniqueInputSchema,
}).strict() ;

export const brands_viewUpdateManyArgsSchema: z.ZodType<Prisma.brands_viewUpdateManyArgs> = z.object({
  data: z.union([ brands_viewUpdateManyMutationInputSchema,brands_viewUncheckedUpdateManyInputSchema ]),
  where: brands_viewWhereInputSchema.optional(),
}).strict() ;

export const brands_viewDeleteManyArgsSchema: z.ZodType<Prisma.brands_viewDeleteManyArgs> = z.object({
  where: brands_viewWhereInputSchema.optional(),
}).strict() ;

export const categories_viewCreateArgsSchema: z.ZodType<Prisma.categories_viewCreateArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  data: z.union([ categories_viewCreateInputSchema,categories_viewUncheckedCreateInputSchema ]),
}).strict() ;

export const categories_viewUpsertArgsSchema: z.ZodType<Prisma.categories_viewUpsertArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereUniqueInputSchema,
  create: z.union([ categories_viewCreateInputSchema,categories_viewUncheckedCreateInputSchema ]),
  update: z.union([ categories_viewUpdateInputSchema,categories_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const categories_viewCreateManyArgsSchema: z.ZodType<Prisma.categories_viewCreateManyArgs> = z.object({
  data: z.union([ categories_viewCreateManyInputSchema,categories_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const categories_viewDeleteArgsSchema: z.ZodType<Prisma.categories_viewDeleteArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  where: categories_viewWhereUniqueInputSchema,
}).strict() ;

export const categories_viewUpdateArgsSchema: z.ZodType<Prisma.categories_viewUpdateArgs> = z.object({
  select: categories_viewSelectSchema.optional(),
  data: z.union([ categories_viewUpdateInputSchema,categories_viewUncheckedUpdateInputSchema ]),
  where: categories_viewWhereUniqueInputSchema,
}).strict() ;

export const categories_viewUpdateManyArgsSchema: z.ZodType<Prisma.categories_viewUpdateManyArgs> = z.object({
  data: z.union([ categories_viewUpdateManyMutationInputSchema,categories_viewUncheckedUpdateManyInputSchema ]),
  where: categories_viewWhereInputSchema.optional(),
}).strict() ;

export const categories_viewDeleteManyArgsSchema: z.ZodType<Prisma.categories_viewDeleteManyArgs> = z.object({
  where: categories_viewWhereInputSchema.optional(),
}).strict() ;

export const items_from_loansCreateArgsSchema: z.ZodType<Prisma.items_from_loansCreateArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  data: z.union([ items_from_loansCreateInputSchema,items_from_loansUncheckedCreateInputSchema ]),
}).strict() ;

export const items_from_loansUpsertArgsSchema: z.ZodType<Prisma.items_from_loansUpsertArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereUniqueInputSchema,
  create: z.union([ items_from_loansCreateInputSchema,items_from_loansUncheckedCreateInputSchema ]),
  update: z.union([ items_from_loansUpdateInputSchema,items_from_loansUncheckedUpdateInputSchema ]),
}).strict() ;

export const items_from_loansCreateManyArgsSchema: z.ZodType<Prisma.items_from_loansCreateManyArgs> = z.object({
  data: z.union([ items_from_loansCreateManyInputSchema,items_from_loansCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const items_from_loansDeleteArgsSchema: z.ZodType<Prisma.items_from_loansDeleteArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  where: items_from_loansWhereUniqueInputSchema,
}).strict() ;

export const items_from_loansUpdateArgsSchema: z.ZodType<Prisma.items_from_loansUpdateArgs> = z.object({
  select: items_from_loansSelectSchema.optional(),
  data: z.union([ items_from_loansUpdateInputSchema,items_from_loansUncheckedUpdateInputSchema ]),
  where: items_from_loansWhereUniqueInputSchema,
}).strict() ;

export const items_from_loansUpdateManyArgsSchema: z.ZodType<Prisma.items_from_loansUpdateManyArgs> = z.object({
  data: z.union([ items_from_loansUpdateManyMutationInputSchema,items_from_loansUncheckedUpdateManyInputSchema ]),
  where: items_from_loansWhereInputSchema.optional(),
}).strict() ;

export const items_from_loansDeleteManyArgsSchema: z.ZodType<Prisma.items_from_loansDeleteManyArgs> = z.object({
  where: items_from_loansWhereInputSchema.optional(),
}).strict() ;

export const items_viewCreateArgsSchema: z.ZodType<Prisma.items_viewCreateArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  data: z.union([ items_viewCreateInputSchema,items_viewUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const items_viewUpsertArgsSchema: z.ZodType<Prisma.items_viewUpsertArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereUniqueInputSchema,
  create: z.union([ items_viewCreateInputSchema,items_viewUncheckedCreateInputSchema ]),
  update: z.union([ items_viewUpdateInputSchema,items_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const items_viewCreateManyArgsSchema: z.ZodType<Prisma.items_viewCreateManyArgs> = z.object({
  data: z.union([ items_viewCreateManyInputSchema,items_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const items_viewDeleteArgsSchema: z.ZodType<Prisma.items_viewDeleteArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  where: items_viewWhereUniqueInputSchema,
}).strict() ;

export const items_viewUpdateArgsSchema: z.ZodType<Prisma.items_viewUpdateArgs> = z.object({
  select: items_viewSelectSchema.optional(),
  data: z.union([ items_viewUpdateInputSchema,items_viewUncheckedUpdateInputSchema ]),
  where: items_viewWhereUniqueInputSchema,
}).strict() ;

export const items_viewUpdateManyArgsSchema: z.ZodType<Prisma.items_viewUpdateManyArgs> = z.object({
  data: z.union([ items_viewUpdateManyMutationInputSchema,items_viewUncheckedUpdateManyInputSchema ]),
  where: items_viewWhereInputSchema.optional(),
}).strict() ;

export const items_viewDeleteManyArgsSchema: z.ZodType<Prisma.items_viewDeleteManyArgs> = z.object({
  where: items_viewWhereInputSchema.optional(),
}).strict() ;

export const loans_viewCreateArgsSchema: z.ZodType<Prisma.loans_viewCreateArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  data: z.union([ loans_viewCreateInputSchema,loans_viewUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const loans_viewUpsertArgsSchema: z.ZodType<Prisma.loans_viewUpsertArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereUniqueInputSchema,
  create: z.union([ loans_viewCreateInputSchema,loans_viewUncheckedCreateInputSchema ]),
  update: z.union([ loans_viewUpdateInputSchema,loans_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const loans_viewCreateManyArgsSchema: z.ZodType<Prisma.loans_viewCreateManyArgs> = z.object({
  data: z.union([ loans_viewCreateManyInputSchema,loans_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const loans_viewDeleteArgsSchema: z.ZodType<Prisma.loans_viewDeleteArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  where: loans_viewWhereUniqueInputSchema,
}).strict() ;

export const loans_viewUpdateArgsSchema: z.ZodType<Prisma.loans_viewUpdateArgs> = z.object({
  select: loans_viewSelectSchema.optional(),
  data: z.union([ loans_viewUpdateInputSchema,loans_viewUncheckedUpdateInputSchema ]),
  where: loans_viewWhereUniqueInputSchema,
}).strict() ;

export const loans_viewUpdateManyArgsSchema: z.ZodType<Prisma.loans_viewUpdateManyArgs> = z.object({
  data: z.union([ loans_viewUpdateManyMutationInputSchema,loans_viewUncheckedUpdateManyInputSchema ]),
  where: loans_viewWhereInputSchema.optional(),
}).strict() ;

export const loans_viewDeleteManyArgsSchema: z.ZodType<Prisma.loans_viewDeleteManyArgs> = z.object({
  where: loans_viewWhereInputSchema.optional(),
}).strict() ;

export const loans_view_extendedCreateArgsSchema: z.ZodType<Prisma.loans_view_extendedCreateArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  data: z.union([ loans_view_extendedCreateInputSchema,loans_view_extendedUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const loans_view_extendedUpsertArgsSchema: z.ZodType<Prisma.loans_view_extendedUpsertArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereUniqueInputSchema,
  create: z.union([ loans_view_extendedCreateInputSchema,loans_view_extendedUncheckedCreateInputSchema ]),
  update: z.union([ loans_view_extendedUpdateInputSchema,loans_view_extendedUncheckedUpdateInputSchema ]),
}).strict() ;

export const loans_view_extendedCreateManyArgsSchema: z.ZodType<Prisma.loans_view_extendedCreateManyArgs> = z.object({
  data: z.union([ loans_view_extendedCreateManyInputSchema,loans_view_extendedCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const loans_view_extendedDeleteArgsSchema: z.ZodType<Prisma.loans_view_extendedDeleteArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  where: loans_view_extendedWhereUniqueInputSchema,
}).strict() ;

export const loans_view_extendedUpdateArgsSchema: z.ZodType<Prisma.loans_view_extendedUpdateArgs> = z.object({
  select: loans_view_extendedSelectSchema.optional(),
  data: z.union([ loans_view_extendedUpdateInputSchema,loans_view_extendedUncheckedUpdateInputSchema ]),
  where: loans_view_extendedWhereUniqueInputSchema,
}).strict() ;

export const loans_view_extendedUpdateManyArgsSchema: z.ZodType<Prisma.loans_view_extendedUpdateManyArgs> = z.object({
  data: z.union([ loans_view_extendedUpdateManyMutationInputSchema,loans_view_extendedUncheckedUpdateManyInputSchema ]),
  where: loans_view_extendedWhereInputSchema.optional(),
}).strict() ;

export const loans_view_extendedDeleteManyArgsSchema: z.ZodType<Prisma.loans_view_extendedDeleteManyArgs> = z.object({
  where: loans_view_extendedWhereInputSchema.optional(),
}).strict() ;

export const products_viewCreateArgsSchema: z.ZodType<Prisma.products_viewCreateArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  data: z.union([ products_viewCreateInputSchema,products_viewUncheckedCreateInputSchema ]),
}).strict() ;

export const products_viewUpsertArgsSchema: z.ZodType<Prisma.products_viewUpsertArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereUniqueInputSchema,
  create: z.union([ products_viewCreateInputSchema,products_viewUncheckedCreateInputSchema ]),
  update: z.union([ products_viewUpdateInputSchema,products_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const products_viewCreateManyArgsSchema: z.ZodType<Prisma.products_viewCreateManyArgs> = z.object({
  data: z.union([ products_viewCreateManyInputSchema,products_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const products_viewDeleteArgsSchema: z.ZodType<Prisma.products_viewDeleteArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  where: products_viewWhereUniqueInputSchema,
}).strict() ;

export const products_viewUpdateArgsSchema: z.ZodType<Prisma.products_viewUpdateArgs> = z.object({
  select: products_viewSelectSchema.optional(),
  data: z.union([ products_viewUpdateInputSchema,products_viewUncheckedUpdateInputSchema ]),
  where: products_viewWhereUniqueInputSchema,
}).strict() ;

export const products_viewUpdateManyArgsSchema: z.ZodType<Prisma.products_viewUpdateManyArgs> = z.object({
  data: z.union([ products_viewUpdateManyMutationInputSchema,products_viewUncheckedUpdateManyInputSchema ]),
  where: products_viewWhereInputSchema.optional(),
}).strict() ;

export const products_viewDeleteManyArgsSchema: z.ZodType<Prisma.products_viewDeleteManyArgs> = z.object({
  where: products_viewWhereInputSchema.optional(),
}).strict() ;

export const users_viewCreateArgsSchema: z.ZodType<Prisma.users_viewCreateArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  data: z.union([ users_viewCreateInputSchema,users_viewUncheckedCreateInputSchema ]),
}).strict() ;

export const users_viewUpsertArgsSchema: z.ZodType<Prisma.users_viewUpsertArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereUniqueInputSchema,
  create: z.union([ users_viewCreateInputSchema,users_viewUncheckedCreateInputSchema ]),
  update: z.union([ users_viewUpdateInputSchema,users_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const users_viewCreateManyArgsSchema: z.ZodType<Prisma.users_viewCreateManyArgs> = z.object({
  data: z.union([ users_viewCreateManyInputSchema,users_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const users_viewDeleteArgsSchema: z.ZodType<Prisma.users_viewDeleteArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  where: users_viewWhereUniqueInputSchema,
}).strict() ;

export const users_viewUpdateArgsSchema: z.ZodType<Prisma.users_viewUpdateArgs> = z.object({
  select: users_viewSelectSchema.optional(),
  data: z.union([ users_viewUpdateInputSchema,users_viewUncheckedUpdateInputSchema ]),
  where: users_viewWhereUniqueInputSchema,
}).strict() ;

export const users_viewUpdateManyArgsSchema: z.ZodType<Prisma.users_viewUpdateManyArgs> = z.object({
  data: z.union([ users_viewUpdateManyMutationInputSchema,users_viewUncheckedUpdateManyInputSchema ]),
  where: users_viewWhereInputSchema.optional(),
}).strict() ;

export const users_viewDeleteManyArgsSchema: z.ZodType<Prisma.users_viewDeleteManyArgs> = z.object({
  where: users_viewWhereInputSchema.optional(),
}).strict() ;

export const product_status_viewCreateArgsSchema: z.ZodType<Prisma.product_status_viewCreateArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  data: z.union([ product_status_viewCreateInputSchema,product_status_viewUncheckedCreateInputSchema ]),
}).strict() ;

export const product_status_viewUpsertArgsSchema: z.ZodType<Prisma.product_status_viewUpsertArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereUniqueInputSchema,
  create: z.union([ product_status_viewCreateInputSchema,product_status_viewUncheckedCreateInputSchema ]),
  update: z.union([ product_status_viewUpdateInputSchema,product_status_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const product_status_viewCreateManyArgsSchema: z.ZodType<Prisma.product_status_viewCreateManyArgs> = z.object({
  data: z.union([ product_status_viewCreateManyInputSchema,product_status_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const product_status_viewDeleteArgsSchema: z.ZodType<Prisma.product_status_viewDeleteArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  where: product_status_viewWhereUniqueInputSchema,
}).strict() ;

export const product_status_viewUpdateArgsSchema: z.ZodType<Prisma.product_status_viewUpdateArgs> = z.object({
  select: product_status_viewSelectSchema.optional(),
  data: z.union([ product_status_viewUpdateInputSchema,product_status_viewUncheckedUpdateInputSchema ]),
  where: product_status_viewWhereUniqueInputSchema,
}).strict() ;

export const product_status_viewUpdateManyArgsSchema: z.ZodType<Prisma.product_status_viewUpdateManyArgs> = z.object({
  data: z.union([ product_status_viewUpdateManyMutationInputSchema,product_status_viewUncheckedUpdateManyInputSchema ]),
  where: product_status_viewWhereInputSchema.optional(),
}).strict() ;

export const product_status_viewDeleteManyArgsSchema: z.ZodType<Prisma.product_status_viewDeleteManyArgs> = z.object({
  where: product_status_viewWhereInputSchema.optional(),
}).strict() ;

export const items_without_statusCreateArgsSchema: z.ZodType<Prisma.items_without_statusCreateArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  data: z.union([ items_without_statusCreateInputSchema,items_without_statusUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const items_without_statusUpsertArgsSchema: z.ZodType<Prisma.items_without_statusUpsertArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereUniqueInputSchema,
  create: z.union([ items_without_statusCreateInputSchema,items_without_statusUncheckedCreateInputSchema ]),
  update: z.union([ items_without_statusUpdateInputSchema,items_without_statusUncheckedUpdateInputSchema ]),
}).strict() ;

export const items_without_statusCreateManyArgsSchema: z.ZodType<Prisma.items_without_statusCreateManyArgs> = z.object({
  data: z.union([ items_without_statusCreateManyInputSchema,items_without_statusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const items_without_statusDeleteArgsSchema: z.ZodType<Prisma.items_without_statusDeleteArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  where: items_without_statusWhereUniqueInputSchema,
}).strict() ;

export const items_without_statusUpdateArgsSchema: z.ZodType<Prisma.items_without_statusUpdateArgs> = z.object({
  select: items_without_statusSelectSchema.optional(),
  data: z.union([ items_without_statusUpdateInputSchema,items_without_statusUncheckedUpdateInputSchema ]),
  where: items_without_statusWhereUniqueInputSchema,
}).strict() ;

export const items_without_statusUpdateManyArgsSchema: z.ZodType<Prisma.items_without_statusUpdateManyArgs> = z.object({
  data: z.union([ items_without_statusUpdateManyMutationInputSchema,items_without_statusUncheckedUpdateManyInputSchema ]),
  where: items_without_statusWhereInputSchema.optional(),
}).strict() ;

export const items_without_statusDeleteManyArgsSchema: z.ZodType<Prisma.items_without_statusDeleteManyArgs> = z.object({
  where: items_without_statusWhereInputSchema.optional(),
}).strict() ;

export const items_with_statusCreateArgsSchema: z.ZodType<Prisma.items_with_statusCreateArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  data: z.union([ items_with_statusCreateInputSchema,items_with_statusUncheckedCreateInputSchema ]),
}).strict() ;

export const items_with_statusUpsertArgsSchema: z.ZodType<Prisma.items_with_statusUpsertArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereUniqueInputSchema,
  create: z.union([ items_with_statusCreateInputSchema,items_with_statusUncheckedCreateInputSchema ]),
  update: z.union([ items_with_statusUpdateInputSchema,items_with_statusUncheckedUpdateInputSchema ]),
}).strict() ;

export const items_with_statusCreateManyArgsSchema: z.ZodType<Prisma.items_with_statusCreateManyArgs> = z.object({
  data: z.union([ items_with_statusCreateManyInputSchema,items_with_statusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const items_with_statusDeleteArgsSchema: z.ZodType<Prisma.items_with_statusDeleteArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  where: items_with_statusWhereUniqueInputSchema,
}).strict() ;

export const items_with_statusUpdateArgsSchema: z.ZodType<Prisma.items_with_statusUpdateArgs> = z.object({
  select: items_with_statusSelectSchema.optional(),
  data: z.union([ items_with_statusUpdateInputSchema,items_with_statusUncheckedUpdateInputSchema ]),
  where: items_with_statusWhereUniqueInputSchema,
}).strict() ;

export const items_with_statusUpdateManyArgsSchema: z.ZodType<Prisma.items_with_statusUpdateManyArgs> = z.object({
  data: z.union([ items_with_statusUpdateManyMutationInputSchema,items_with_statusUncheckedUpdateManyInputSchema ]),
  where: items_with_statusWhereInputSchema.optional(),
}).strict() ;

export const items_with_statusDeleteManyArgsSchema: z.ZodType<Prisma.items_with_statusDeleteManyArgs> = z.object({
  where: items_with_statusWhereInputSchema.optional(),
}).strict() ;

export const zones_viewCreateArgsSchema: z.ZodType<Prisma.zones_viewCreateArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  data: z.union([ zones_viewCreateInputSchema,zones_viewUncheckedCreateInputSchema ]),
}).strict() ;

export const zones_viewUpsertArgsSchema: z.ZodType<Prisma.zones_viewUpsertArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereUniqueInputSchema,
  create: z.union([ zones_viewCreateInputSchema,zones_viewUncheckedCreateInputSchema ]),
  update: z.union([ zones_viewUpdateInputSchema,zones_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const zones_viewCreateManyArgsSchema: z.ZodType<Prisma.zones_viewCreateManyArgs> = z.object({
  data: z.union([ zones_viewCreateManyInputSchema,zones_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const zones_viewDeleteArgsSchema: z.ZodType<Prisma.zones_viewDeleteArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  where: zones_viewWhereUniqueInputSchema,
}).strict() ;

export const zones_viewUpdateArgsSchema: z.ZodType<Prisma.zones_viewUpdateArgs> = z.object({
  select: zones_viewSelectSchema.optional(),
  data: z.union([ zones_viewUpdateInputSchema,zones_viewUncheckedUpdateInputSchema ]),
  where: zones_viewWhereUniqueInputSchema,
}).strict() ;

export const zones_viewUpdateManyArgsSchema: z.ZodType<Prisma.zones_viewUpdateManyArgs> = z.object({
  data: z.union([ zones_viewUpdateManyMutationInputSchema,zones_viewUncheckedUpdateManyInputSchema ]),
  where: zones_viewWhereInputSchema.optional(),
}).strict() ;

export const zones_viewDeleteManyArgsSchema: z.ZodType<Prisma.zones_viewDeleteManyArgs> = z.object({
  where: zones_viewWhereInputSchema.optional(),
}).strict() ;

export const buildings_viewCreateArgsSchema: z.ZodType<Prisma.buildings_viewCreateArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  data: z.union([ buildings_viewCreateInputSchema,buildings_viewUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const buildings_viewUpsertArgsSchema: z.ZodType<Prisma.buildings_viewUpsertArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereUniqueInputSchema,
  create: z.union([ buildings_viewCreateInputSchema,buildings_viewUncheckedCreateInputSchema ]),
  update: z.union([ buildings_viewUpdateInputSchema,buildings_viewUncheckedUpdateInputSchema ]),
}).strict() ;

export const buildings_viewCreateManyArgsSchema: z.ZodType<Prisma.buildings_viewCreateManyArgs> = z.object({
  data: z.union([ buildings_viewCreateManyInputSchema,buildings_viewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const buildings_viewDeleteArgsSchema: z.ZodType<Prisma.buildings_viewDeleteArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  where: buildings_viewWhereUniqueInputSchema,
}).strict() ;

export const buildings_viewUpdateArgsSchema: z.ZodType<Prisma.buildings_viewUpdateArgs> = z.object({
  select: buildings_viewSelectSchema.optional(),
  data: z.union([ buildings_viewUpdateInputSchema,buildings_viewUncheckedUpdateInputSchema ]),
  where: buildings_viewWhereUniqueInputSchema,
}).strict() ;

export const buildings_viewUpdateManyArgsSchema: z.ZodType<Prisma.buildings_viewUpdateManyArgs> = z.object({
  data: z.union([ buildings_viewUpdateManyMutationInputSchema,buildings_viewUncheckedUpdateManyInputSchema ]),
  where: buildings_viewWhereInputSchema.optional(),
}).strict() ;

export const buildings_viewDeleteManyArgsSchema: z.ZodType<Prisma.buildings_viewDeleteManyArgs> = z.object({
  where: buildings_viewWhereInputSchema.optional(),
}).strict() ;