import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  ScalarType,
  EnumType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;
    query?: t_Query | null;
    pokemons?: FieldsTypeArg<{ first: number }, (t_Pokemon | null)[] | null>;
    pokemon?: FieldsTypeArg<
      { id?: string | null; name?: string | null },
      t_Pokemon | null
    >;
  },
  Extension<"Query">
>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name Pokemon
 * @type OBJECT
 */
type t_Pokemon = FieldsType<
  {
    __typename: t_String<"Pokemon">;

    /**
     * The ID of an object
     */
    id: t_ID;

    /**
     * The identifier of this Pokémon
     */
    number?: t_String | null;

    /**
     * The name of this Pokémon
     */
    name?: t_String | null;

    /**
     * The minimum and maximum weight of this Pokémon
     */
    weight?: t_PokemonDimension | null;

    /**
     * The minimum and maximum weight of this Pokémon
     */
    height?: t_PokemonDimension | null;

    /**
     * The classification of this Pokémon
     */
    classification?: t_String | null;

    /**
     * The type(s) of this Pokémon
     */
    types?: (t_String | null)[] | null;

    /**
     * The type(s) of Pokémons that this Pokémon is resistant to
     */
    resistant?: (t_String | null)[] | null;

    /**
     * The attacks of this Pokémon
     */
    attacks?: t_PokemonAttack | null;

    /**
     * The type(s) of Pokémons that this Pokémon weak to
     */
    weaknesses?: (t_String | null)[] | null;
    fleeRate?: t_Float | null;

    /**
     * The maximum CP of this Pokémon
     */
    maxCP?: t_Int | null;

    /**
     * The evolutions of this Pokémon
     */
    evolutions?: (t_Pokemon | null)[] | null;

    /**
     * The evolution requirements of this Pokémon
     */
    evolutionRequirements?: t_PokemonEvolutionRequirement | null;

    /**
     * The maximum HP of this Pokémon
     */
    maxHP?: t_Int | null;
    image?: t_String | null;
  },
  Extension<"Pokemon">
>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name PokemonDimension
 * @type OBJECT
 */
type t_PokemonDimension = FieldsType<
  {
    __typename: t_String<"PokemonDimension">;

    /**
     * The minimum value of this dimension
     */
    minimum?: t_String | null;

    /**
     * The maximum value of this dimension
     */
    maximum?: t_String | null;
  },
  Extension<"PokemonDimension">
>;

/**
 * @name PokemonAttack
 * @type OBJECT
 */
type t_PokemonAttack = FieldsType<
  {
    __typename: t_String<"PokemonAttack">;

    /**
     * The fast attacks of this Pokémon
     */
    fast?: (t_Attack | null)[] | null;

    /**
     * The special attacks of this Pokémon
     */
    special?: (t_Attack | null)[] | null;
  },
  Extension<"PokemonAttack">
>;

/**
 * @name Attack
 * @type OBJECT
 */
type t_Attack = FieldsType<
  {
    __typename: t_String<"Attack">;

    /**
     * The name of this Pokémon attack
     */
    name?: t_String | null;

    /**
     * The type of this Pokémon attack
     */
    type?: t_String | null;

    /**
     * The damage of this Pokémon attack
     */
    damage?: t_Int | null;
  },
  Extension<"Attack">
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name PokemonEvolutionRequirement
 * @type OBJECT
 */
type t_PokemonEvolutionRequirement = FieldsType<
  {
    __typename: t_String<"PokemonEvolutionRequirement">;

    /**
     * The amount of candy to evolve
     */
    amount?: t_Int | null;

    /**
     * The name of the candy to evolve
     */
    name?: t_String | null;
  },
  Extension<"PokemonEvolutionRequirement">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name?: t_String | null;
    description?: t_String | null;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces?: t___Type[] | null;
    possibleTypes?: t___Type[] | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields?: t___InputValue[] | null;
    ofType?: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description?: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description?: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];

    /**
     * @deprecated Use `locations`.
     */
    onOperation: t_Boolean;

    /**
     * @deprecated Use `locations`.
     */
    onFragment: t_Boolean;

    /**
     * @deprecated Use `locations`.
     */
    onField: t_Boolean;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name Pokemon
 * @type OBJECT
 */
export type Pokemon = TypeData<t_Pokemon>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name PokemonDimension
 * @type OBJECT
 */
export type PokemonDimension = TypeData<t_PokemonDimension>;

/**
 * @name PokemonAttack
 * @type OBJECT
 */
export type PokemonAttack = TypeData<t_PokemonAttack>;

/**
 * @name Attack
 * @type OBJECT
 */
export type Attack = TypeData<t_Attack>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name PokemonEvolutionRequirement
 * @type OBJECT
 */
export type PokemonEvolutionRequirement = TypeData<
  t_PokemonEvolutionRequirement
>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  LIST = "LIST",
  NON_NULL = "NON_NULL"
}

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  QUERY = "QUERY",
  MUTATION = "MUTATION",
  SUBSCRIPTION = "SUBSCRIPTION",
  FIELD = "FIELD",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  SCHEMA = "SCHEMA",
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  INPUT_OBJECT = "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
}
