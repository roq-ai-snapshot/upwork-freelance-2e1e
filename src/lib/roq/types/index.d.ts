/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model agency_member
 *
 */
export type agency_member = $Result.DefaultSelection<Prisma.$agency_memberPayload>;
/**
 * Model agency_owner
 *
 */
export type agency_owner = $Result.DefaultSelection<Prisma.$agency_ownerPayload>;
/**
 * Model client_name
 *
 */
export type client_name = $Result.DefaultSelection<Prisma.$client_namePayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model freelancer
 *
 */
export type freelancer = $Result.DefaultSelection<Prisma.$freelancerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agency_members
 * const agency_members = await prisma.agency_member.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agency_members
   * const agency_members = await prisma.agency_member.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.agency_member`: Exposes CRUD operations for the **agency_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Agency_members
   * const agency_members = await prisma.agency_member.findMany()
   * ```
   */
  get agency_member(): Prisma.agency_memberDelegate<ExtArgs>;

  /**
   * `prisma.agency_owner`: Exposes CRUD operations for the **agency_owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Agency_owners
   * const agency_owners = await prisma.agency_owner.findMany()
   * ```
   */
  get agency_owner(): Prisma.agency_ownerDelegate<ExtArgs>;

  /**
   * `prisma.client_name`: Exposes CRUD operations for the **client_name** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Client_names
   * const client_names = await prisma.client_name.findMany()
   * ```
   */
  get client_name(): Prisma.client_nameDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.freelancer`: Exposes CRUD operations for the **freelancer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Freelancers
   * const freelancers = await prisma.freelancer.findMany()
   * ```
   */
  get freelancer(): Prisma.freelancerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    agency_member: 'agency_member';
    agency_owner: 'agency_owner';
    client_name: 'client_name';
    company: 'company';
    freelancer: 'freelancer';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'agency_member' | 'agency_owner' | 'client_name' | 'company' | 'freelancer' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      agency_member: {
        payload: Prisma.$agency_memberPayload<ExtArgs>;
        fields: Prisma.agency_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.agency_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.agency_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>;
          };
          findFirst: {
            args: Prisma.agency_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.agency_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>;
          };
          findMany: {
            args: Prisma.agency_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>[];
          };
          create: {
            args: Prisma.agency_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>;
          };
          createMany: {
            args: Prisma.agency_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.agency_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>;
          };
          update: {
            args: Prisma.agency_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>;
          };
          deleteMany: {
            args: Prisma.agency_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.agency_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.agency_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_memberPayload>;
          };
          aggregate: {
            args: Prisma.Agency_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAgency_member>;
          };
          groupBy: {
            args: Prisma.agency_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Agency_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.agency_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Agency_memberCountAggregateOutputType> | number;
          };
        };
      };
      agency_owner: {
        payload: Prisma.$agency_ownerPayload<ExtArgs>;
        fields: Prisma.agency_ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.agency_ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.agency_ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>;
          };
          findFirst: {
            args: Prisma.agency_ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.agency_ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>;
          };
          findMany: {
            args: Prisma.agency_ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>[];
          };
          create: {
            args: Prisma.agency_ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>;
          };
          createMany: {
            args: Prisma.agency_ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.agency_ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>;
          };
          update: {
            args: Prisma.agency_ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>;
          };
          deleteMany: {
            args: Prisma.agency_ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.agency_ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.agency_ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agency_ownerPayload>;
          };
          aggregate: {
            args: Prisma.Agency_ownerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAgency_owner>;
          };
          groupBy: {
            args: Prisma.agency_ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Agency_ownerGroupByOutputType>[];
          };
          count: {
            args: Prisma.agency_ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<Agency_ownerCountAggregateOutputType> | number;
          };
        };
      };
      client_name: {
        payload: Prisma.$client_namePayload<ExtArgs>;
        fields: Prisma.client_nameFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.client_nameFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.client_nameFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>;
          };
          findFirst: {
            args: Prisma.client_nameFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.client_nameFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>;
          };
          findMany: {
            args: Prisma.client_nameFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>[];
          };
          create: {
            args: Prisma.client_nameCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>;
          };
          createMany: {
            args: Prisma.client_nameCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.client_nameDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>;
          };
          update: {
            args: Prisma.client_nameUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>;
          };
          deleteMany: {
            args: Prisma.client_nameDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.client_nameUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.client_nameUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_namePayload>;
          };
          aggregate: {
            args: Prisma.Client_nameAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient_name>;
          };
          groupBy: {
            args: Prisma.client_nameGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Client_nameGroupByOutputType>[];
          };
          count: {
            args: Prisma.client_nameCountArgs<ExtArgs>;
            result: $Utils.Optional<Client_nameCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      freelancer: {
        payload: Prisma.$freelancerPayload<ExtArgs>;
        fields: Prisma.freelancerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.freelancerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.freelancerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          findFirst: {
            args: Prisma.freelancerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.freelancerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          findMany: {
            args: Prisma.freelancerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>[];
          };
          create: {
            args: Prisma.freelancerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          createMany: {
            args: Prisma.freelancerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.freelancerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          update: {
            args: Prisma.freelancerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          deleteMany: {
            args: Prisma.freelancerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.freelancerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.freelancerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          aggregate: {
            args: Prisma.FreelancerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFreelancer>;
          };
          groupBy: {
            args: Prisma.freelancerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FreelancerGroupByOutputType>[];
          };
          count: {
            args: Prisma.freelancerCountArgs<ExtArgs>;
            result: $Utils.Optional<FreelancerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    agency_owner: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency_owner?: boolean | CompanyCountOutputTypeCountAgency_ownerArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAgency_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: agency_ownerWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    agency_member: number;
    agency_owner: number;
    client_name: number;
    freelancer: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency_member?: boolean | UserCountOutputTypeCountAgency_memberArgs;
    agency_owner?: boolean | UserCountOutputTypeCountAgency_ownerArgs;
    client_name?: boolean | UserCountOutputTypeCountClient_nameArgs;
    freelancer?: boolean | UserCountOutputTypeCountFreelancerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgency_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: agency_memberWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgency_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: agency_ownerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClient_nameArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: client_nameWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFreelancerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: freelancerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model agency_member
   */

  export type AggregateAgency_member = {
    _count: Agency_memberCountAggregateOutputType | null;
    _min: Agency_memberMinAggregateOutputType | null;
    _max: Agency_memberMaxAggregateOutputType | null;
  };

  export type Agency_memberMinAggregateOutputType = {
    id: string | null;
    role: string | null;
    joining_date: Date | null;
    leaving_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agency_memberMaxAggregateOutputType = {
    id: string | null;
    role: string | null;
    joining_date: Date | null;
    leaving_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agency_memberCountAggregateOutputType = {
    id: number;
    role: number;
    joining_date: number;
    leaving_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Agency_memberMinAggregateInputType = {
    id?: true;
    role?: true;
    joining_date?: true;
    leaving_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agency_memberMaxAggregateInputType = {
    id?: true;
    role?: true;
    joining_date?: true;
    leaving_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agency_memberCountAggregateInputType = {
    id?: true;
    role?: true;
    joining_date?: true;
    leaving_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Agency_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agency_member to aggregate.
     */
    where?: agency_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_members to fetch.
     */
    orderBy?: agency_memberOrderByWithRelationInput | agency_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: agency_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agency_members
     **/
    _count?: true | Agency_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Agency_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Agency_memberMaxAggregateInputType;
  };

  export type GetAgency_memberAggregateType<T extends Agency_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateAgency_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency_member[P]>
      : GetScalarType<T[P], AggregateAgency_member[P]>;
  };

  export type agency_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agency_memberWhereInput;
    orderBy?: agency_memberOrderByWithAggregationInput | agency_memberOrderByWithAggregationInput[];
    by: Agency_memberScalarFieldEnum[] | Agency_memberScalarFieldEnum;
    having?: agency_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Agency_memberCountAggregateInputType | true;
    _min?: Agency_memberMinAggregateInputType;
    _max?: Agency_memberMaxAggregateInputType;
  };

  export type Agency_memberGroupByOutputType = {
    id: string;
    role: string | null;
    joining_date: Date | null;
    leaving_date: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Agency_memberCountAggregateOutputType | null;
    _min: Agency_memberMinAggregateOutputType | null;
    _max: Agency_memberMaxAggregateOutputType | null;
  };

  type GetAgency_memberGroupByPayload<T extends agency_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agency_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Agency_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Agency_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Agency_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type agency_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        role?: boolean;
        joining_date?: boolean;
        leaving_date?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['agency_member']
    >;

  export type agency_memberSelectScalar = {
    id?: boolean;
    role?: boolean;
    joining_date?: boolean;
    leaving_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type agency_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $agency_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'agency_member';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        role: string | null;
        joining_date: Date | null;
        leaving_date: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['agency_member']
    >;
    composites: {};
  };

  type agency_memberGetPayload<S extends boolean | null | undefined | agency_memberDefaultArgs> = $Result.GetResult<
    Prisma.$agency_memberPayload,
    S
  >;

  type agency_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    agency_memberFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Agency_memberCountAggregateInputType | true;
  };

  export interface agency_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agency_member']; meta: { name: 'agency_member' } };
    /**
     * Find zero or one Agency_member that matches the filter.
     * @param {agency_memberFindUniqueArgs} args - Arguments to find a Agency_member
     * @example
     * // Get one Agency_member
     * const agency_member = await prisma.agency_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends agency_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, agency_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Agency_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {agency_memberFindUniqueOrThrowArgs} args - Arguments to find a Agency_member
     * @example
     * // Get one Agency_member
     * const agency_member = await prisma.agency_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends agency_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Agency_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_memberFindFirstArgs} args - Arguments to find a Agency_member
     * @example
     * // Get one Agency_member
     * const agency_member = await prisma.agency_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends agency_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Agency_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_memberFindFirstOrThrowArgs} args - Arguments to find a Agency_member
     * @example
     * // Get one Agency_member
     * const agency_member = await prisma.agency_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends agency_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Agency_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agency_members
     * const agency_members = await prisma.agency_member.findMany()
     *
     * // Get first 10 Agency_members
     * const agency_members = await prisma.agency_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const agency_memberWithIdOnly = await prisma.agency_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends agency_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Agency_member.
     * @param {agency_memberCreateArgs} args - Arguments to create a Agency_member.
     * @example
     * // Create one Agency_member
     * const Agency_member = await prisma.agency_member.create({
     *   data: {
     *     // ... data to create a Agency_member
     *   }
     * })
     *
     **/
    create<T extends agency_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, agency_memberCreateArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Agency_members.
     *     @param {agency_memberCreateManyArgs} args - Arguments to create many Agency_members.
     *     @example
     *     // Create many Agency_members
     *     const agency_member = await prisma.agency_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends agency_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Agency_member.
     * @param {agency_memberDeleteArgs} args - Arguments to delete one Agency_member.
     * @example
     * // Delete one Agency_member
     * const Agency_member = await prisma.agency_member.delete({
     *   where: {
     *     // ... filter to delete one Agency_member
     *   }
     * })
     *
     **/
    delete<T extends agency_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, agency_memberDeleteArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Agency_member.
     * @param {agency_memberUpdateArgs} args - Arguments to update one Agency_member.
     * @example
     * // Update one Agency_member
     * const agency_member = await prisma.agency_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends agency_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, agency_memberUpdateArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Agency_members.
     * @param {agency_memberDeleteManyArgs} args - Arguments to filter Agency_members to delete.
     * @example
     * // Delete a few Agency_members
     * const { count } = await prisma.agency_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends agency_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Agency_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agency_members
     * const agency_member = await prisma.agency_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends agency_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, agency_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Agency_member.
     * @param {agency_memberUpsertArgs} args - Arguments to update or create a Agency_member.
     * @example
     * // Update or create a Agency_member
     * const agency_member = await prisma.agency_member.upsert({
     *   create: {
     *     // ... data to create a Agency_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency_member we want to update
     *   }
     * })
     **/
    upsert<T extends agency_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, agency_memberUpsertArgs<ExtArgs>>,
    ): Prisma__agency_memberClient<
      $Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Agency_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_memberCountArgs} args - Arguments to filter Agency_members to count.
     * @example
     * // Count the number of Agency_members
     * const count = await prisma.agency_member.count({
     *   where: {
     *     // ... the filter for the Agency_members we want to count
     *   }
     * })
     **/
    count<T extends agency_memberCountArgs>(
      args?: Subset<T, agency_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agency_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Agency_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agency_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Agency_memberAggregateArgs>(
      args: Subset<T, Agency_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetAgency_memberAggregateType<T>>;

    /**
     * Group by Agency_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends agency_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agency_memberGroupByArgs['orderBy'] }
        : { orderBy?: agency_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, agency_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAgency_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the agency_member model
     */
    readonly fields: agency_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agency_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agency_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the agency_member model
   */
  interface agency_memberFieldRefs {
    readonly id: FieldRef<'agency_member', 'String'>;
    readonly role: FieldRef<'agency_member', 'String'>;
    readonly joining_date: FieldRef<'agency_member', 'DateTime'>;
    readonly leaving_date: FieldRef<'agency_member', 'DateTime'>;
    readonly user_id: FieldRef<'agency_member', 'String'>;
    readonly created_at: FieldRef<'agency_member', 'DateTime'>;
    readonly updated_at: FieldRef<'agency_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * agency_member findUnique
   */
  export type agency_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * Filter, which agency_member to fetch.
     */
    where: agency_memberWhereUniqueInput;
  };

  /**
   * agency_member findUniqueOrThrow
   */
  export type agency_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * Filter, which agency_member to fetch.
     */
    where: agency_memberWhereUniqueInput;
  };

  /**
   * agency_member findFirst
   */
  export type agency_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * Filter, which agency_member to fetch.
     */
    where?: agency_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_members to fetch.
     */
    orderBy?: agency_memberOrderByWithRelationInput | agency_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agency_members.
     */
    cursor?: agency_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agency_members.
     */
    distinct?: Agency_memberScalarFieldEnum | Agency_memberScalarFieldEnum[];
  };

  /**
   * agency_member findFirstOrThrow
   */
  export type agency_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * Filter, which agency_member to fetch.
     */
    where?: agency_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_members to fetch.
     */
    orderBy?: agency_memberOrderByWithRelationInput | agency_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agency_members.
     */
    cursor?: agency_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agency_members.
     */
    distinct?: Agency_memberScalarFieldEnum | Agency_memberScalarFieldEnum[];
  };

  /**
   * agency_member findMany
   */
  export type agency_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * Filter, which agency_members to fetch.
     */
    where?: agency_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_members to fetch.
     */
    orderBy?: agency_memberOrderByWithRelationInput | agency_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agency_members.
     */
    cursor?: agency_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_members.
     */
    skip?: number;
    distinct?: Agency_memberScalarFieldEnum | Agency_memberScalarFieldEnum[];
  };

  /**
   * agency_member create
   */
  export type agency_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a agency_member.
     */
    data: XOR<agency_memberCreateInput, agency_memberUncheckedCreateInput>;
  };

  /**
   * agency_member createMany
   */
  export type agency_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agency_members.
     */
    data: agency_memberCreateManyInput | agency_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * agency_member update
   */
  export type agency_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a agency_member.
     */
    data: XOR<agency_memberUpdateInput, agency_memberUncheckedUpdateInput>;
    /**
     * Choose, which agency_member to update.
     */
    where: agency_memberWhereUniqueInput;
  };

  /**
   * agency_member updateMany
   */
  export type agency_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agency_members.
     */
    data: XOR<agency_memberUpdateManyMutationInput, agency_memberUncheckedUpdateManyInput>;
    /**
     * Filter which agency_members to update
     */
    where?: agency_memberWhereInput;
  };

  /**
   * agency_member upsert
   */
  export type agency_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the agency_member to update in case it exists.
     */
    where: agency_memberWhereUniqueInput;
    /**
     * In case the agency_member found by the `where` argument doesn't exist, create a new agency_member with this data.
     */
    create: XOR<agency_memberCreateInput, agency_memberUncheckedCreateInput>;
    /**
     * In case the agency_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agency_memberUpdateInput, agency_memberUncheckedUpdateInput>;
  };

  /**
   * agency_member delete
   */
  export type agency_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    /**
     * Filter which agency_member to delete.
     */
    where: agency_memberWhereUniqueInput;
  };

  /**
   * agency_member deleteMany
   */
  export type agency_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agency_members to delete
     */
    where?: agency_memberWhereInput;
  };

  /**
   * agency_member without action
   */
  export type agency_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
  };

  /**
   * Model agency_owner
   */

  export type AggregateAgency_owner = {
    _count: Agency_ownerCountAggregateOutputType | null;
    _min: Agency_ownerMinAggregateOutputType | null;
    _max: Agency_ownerMaxAggregateOutputType | null;
  };

  export type Agency_ownerMinAggregateOutputType = {
    id: string | null;
    company_id: string | null;
    joining_date: Date | null;
    leaving_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agency_ownerMaxAggregateOutputType = {
    id: string | null;
    company_id: string | null;
    joining_date: Date | null;
    leaving_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agency_ownerCountAggregateOutputType = {
    id: number;
    company_id: number;
    joining_date: number;
    leaving_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Agency_ownerMinAggregateInputType = {
    id?: true;
    company_id?: true;
    joining_date?: true;
    leaving_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agency_ownerMaxAggregateInputType = {
    id?: true;
    company_id?: true;
    joining_date?: true;
    leaving_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agency_ownerCountAggregateInputType = {
    id?: true;
    company_id?: true;
    joining_date?: true;
    leaving_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Agency_ownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agency_owner to aggregate.
     */
    where?: agency_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_owners to fetch.
     */
    orderBy?: agency_ownerOrderByWithRelationInput | agency_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: agency_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agency_owners
     **/
    _count?: true | Agency_ownerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Agency_ownerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Agency_ownerMaxAggregateInputType;
  };

  export type GetAgency_ownerAggregateType<T extends Agency_ownerAggregateArgs> = {
    [P in keyof T & keyof AggregateAgency_owner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency_owner[P]>
      : GetScalarType<T[P], AggregateAgency_owner[P]>;
  };

  export type agency_ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agency_ownerWhereInput;
    orderBy?: agency_ownerOrderByWithAggregationInput | agency_ownerOrderByWithAggregationInput[];
    by: Agency_ownerScalarFieldEnum[] | Agency_ownerScalarFieldEnum;
    having?: agency_ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Agency_ownerCountAggregateInputType | true;
    _min?: Agency_ownerMinAggregateInputType;
    _max?: Agency_ownerMaxAggregateInputType;
  };

  export type Agency_ownerGroupByOutputType = {
    id: string;
    company_id: string;
    joining_date: Date | null;
    leaving_date: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Agency_ownerCountAggregateOutputType | null;
    _min: Agency_ownerMinAggregateOutputType | null;
    _max: Agency_ownerMaxAggregateOutputType | null;
  };

  type GetAgency_ownerGroupByPayload<T extends agency_ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agency_ownerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Agency_ownerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Agency_ownerGroupByOutputType[P]>
          : GetScalarType<T[P], Agency_ownerGroupByOutputType[P]>;
      }
    >
  >;

  export type agency_ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        company_id?: boolean;
        joining_date?: boolean;
        leaving_date?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['agency_owner']
    >;

  export type agency_ownerSelectScalar = {
    id?: boolean;
    company_id?: boolean;
    joining_date?: boolean;
    leaving_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type agency_ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $agency_ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'agency_owner';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        company_id: string;
        joining_date: Date | null;
        leaving_date: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['agency_owner']
    >;
    composites: {};
  };

  type agency_ownerGetPayload<S extends boolean | null | undefined | agency_ownerDefaultArgs> = $Result.GetResult<
    Prisma.$agency_ownerPayload,
    S
  >;

  type agency_ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    agency_ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Agency_ownerCountAggregateInputType | true;
  };

  export interface agency_ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agency_owner']; meta: { name: 'agency_owner' } };
    /**
     * Find zero or one Agency_owner that matches the filter.
     * @param {agency_ownerFindUniqueArgs} args - Arguments to find a Agency_owner
     * @example
     * // Get one Agency_owner
     * const agency_owner = await prisma.agency_owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends agency_ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, agency_ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<
      $Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Agency_owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {agency_ownerFindUniqueOrThrowArgs} args - Arguments to find a Agency_owner
     * @example
     * // Get one Agency_owner
     * const agency_owner = await prisma.agency_owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends agency_ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<
      $Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Agency_owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_ownerFindFirstArgs} args - Arguments to find a Agency_owner
     * @example
     * // Get one Agency_owner
     * const agency_owner = await prisma.agency_owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends agency_ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<
      $Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Agency_owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_ownerFindFirstOrThrowArgs} args - Arguments to find a Agency_owner
     * @example
     * // Get one Agency_owner
     * const agency_owner = await prisma.agency_owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends agency_ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<
      $Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Agency_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agency_owners
     * const agency_owners = await prisma.agency_owner.findMany()
     *
     * // Get first 10 Agency_owners
     * const agency_owners = await prisma.agency_owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const agency_ownerWithIdOnly = await prisma.agency_owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends agency_ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Agency_owner.
     * @param {agency_ownerCreateArgs} args - Arguments to create a Agency_owner.
     * @example
     * // Create one Agency_owner
     * const Agency_owner = await prisma.agency_owner.create({
     *   data: {
     *     // ... data to create a Agency_owner
     *   }
     * })
     *
     **/
    create<T extends agency_ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, agency_ownerCreateArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Agency_owners.
     *     @param {agency_ownerCreateManyArgs} args - Arguments to create many Agency_owners.
     *     @example
     *     // Create many Agency_owners
     *     const agency_owner = await prisma.agency_owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends agency_ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Agency_owner.
     * @param {agency_ownerDeleteArgs} args - Arguments to delete one Agency_owner.
     * @example
     * // Delete one Agency_owner
     * const Agency_owner = await prisma.agency_owner.delete({
     *   where: {
     *     // ... filter to delete one Agency_owner
     *   }
     * })
     *
     **/
    delete<T extends agency_ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, agency_ownerDeleteArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Agency_owner.
     * @param {agency_ownerUpdateArgs} args - Arguments to update one Agency_owner.
     * @example
     * // Update one Agency_owner
     * const agency_owner = await prisma.agency_owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends agency_ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, agency_ownerUpdateArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Agency_owners.
     * @param {agency_ownerDeleteManyArgs} args - Arguments to filter Agency_owners to delete.
     * @example
     * // Delete a few Agency_owners
     * const { count } = await prisma.agency_owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends agency_ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agency_ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Agency_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agency_owners
     * const agency_owner = await prisma.agency_owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends agency_ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, agency_ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Agency_owner.
     * @param {agency_ownerUpsertArgs} args - Arguments to update or create a Agency_owner.
     * @example
     * // Update or create a Agency_owner
     * const agency_owner = await prisma.agency_owner.upsert({
     *   create: {
     *     // ... data to create a Agency_owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency_owner we want to update
     *   }
     * })
     **/
    upsert<T extends agency_ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, agency_ownerUpsertArgs<ExtArgs>>,
    ): Prisma__agency_ownerClient<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Agency_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_ownerCountArgs} args - Arguments to filter Agency_owners to count.
     * @example
     * // Count the number of Agency_owners
     * const count = await prisma.agency_owner.count({
     *   where: {
     *     // ... the filter for the Agency_owners we want to count
     *   }
     * })
     **/
    count<T extends agency_ownerCountArgs>(
      args?: Subset<T, agency_ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agency_ownerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Agency_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agency_ownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Agency_ownerAggregateArgs>(
      args: Subset<T, Agency_ownerAggregateArgs>,
    ): Prisma.PrismaPromise<GetAgency_ownerAggregateType<T>>;

    /**
     * Group by Agency_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agency_ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends agency_ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agency_ownerGroupByArgs['orderBy'] }
        : { orderBy?: agency_ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, agency_ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAgency_ownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the agency_owner model
     */
    readonly fields: agency_ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agency_owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agency_ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the agency_owner model
   */
  interface agency_ownerFieldRefs {
    readonly id: FieldRef<'agency_owner', 'String'>;
    readonly company_id: FieldRef<'agency_owner', 'String'>;
    readonly joining_date: FieldRef<'agency_owner', 'DateTime'>;
    readonly leaving_date: FieldRef<'agency_owner', 'DateTime'>;
    readonly user_id: FieldRef<'agency_owner', 'String'>;
    readonly created_at: FieldRef<'agency_owner', 'DateTime'>;
    readonly updated_at: FieldRef<'agency_owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * agency_owner findUnique
   */
  export type agency_ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which agency_owner to fetch.
     */
    where: agency_ownerWhereUniqueInput;
  };

  /**
   * agency_owner findUniqueOrThrow
   */
  export type agency_ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which agency_owner to fetch.
     */
    where: agency_ownerWhereUniqueInput;
  };

  /**
   * agency_owner findFirst
   */
  export type agency_ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which agency_owner to fetch.
     */
    where?: agency_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_owners to fetch.
     */
    orderBy?: agency_ownerOrderByWithRelationInput | agency_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agency_owners.
     */
    cursor?: agency_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agency_owners.
     */
    distinct?: Agency_ownerScalarFieldEnum | Agency_ownerScalarFieldEnum[];
  };

  /**
   * agency_owner findFirstOrThrow
   */
  export type agency_ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which agency_owner to fetch.
     */
    where?: agency_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_owners to fetch.
     */
    orderBy?: agency_ownerOrderByWithRelationInput | agency_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agency_owners.
     */
    cursor?: agency_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agency_owners.
     */
    distinct?: Agency_ownerScalarFieldEnum | Agency_ownerScalarFieldEnum[];
  };

  /**
   * agency_owner findMany
   */
  export type agency_ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which agency_owners to fetch.
     */
    where?: agency_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agency_owners to fetch.
     */
    orderBy?: agency_ownerOrderByWithRelationInput | agency_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agency_owners.
     */
    cursor?: agency_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agency_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agency_owners.
     */
    skip?: number;
    distinct?: Agency_ownerScalarFieldEnum | Agency_ownerScalarFieldEnum[];
  };

  /**
   * agency_owner create
   */
  export type agency_ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a agency_owner.
     */
    data: XOR<agency_ownerCreateInput, agency_ownerUncheckedCreateInput>;
  };

  /**
   * agency_owner createMany
   */
  export type agency_ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agency_owners.
     */
    data: agency_ownerCreateManyInput | agency_ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * agency_owner update
   */
  export type agency_ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a agency_owner.
     */
    data: XOR<agency_ownerUpdateInput, agency_ownerUncheckedUpdateInput>;
    /**
     * Choose, which agency_owner to update.
     */
    where: agency_ownerWhereUniqueInput;
  };

  /**
   * agency_owner updateMany
   */
  export type agency_ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agency_owners.
     */
    data: XOR<agency_ownerUpdateManyMutationInput, agency_ownerUncheckedUpdateManyInput>;
    /**
     * Filter which agency_owners to update
     */
    where?: agency_ownerWhereInput;
  };

  /**
   * agency_owner upsert
   */
  export type agency_ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the agency_owner to update in case it exists.
     */
    where: agency_ownerWhereUniqueInput;
    /**
     * In case the agency_owner found by the `where` argument doesn't exist, create a new agency_owner with this data.
     */
    create: XOR<agency_ownerCreateInput, agency_ownerUncheckedCreateInput>;
    /**
     * In case the agency_owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agency_ownerUpdateInput, agency_ownerUncheckedUpdateInput>;
  };

  /**
   * agency_owner delete
   */
  export type agency_ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    /**
     * Filter which agency_owner to delete.
     */
    where: agency_ownerWhereUniqueInput;
  };

  /**
   * agency_owner deleteMany
   */
  export type agency_ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agency_owners to delete
     */
    where?: agency_ownerWhereInput;
  };

  /**
   * agency_owner without action
   */
  export type agency_ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
  };

  /**
   * Model client_name
   */

  export type AggregateClient_name = {
    _count: Client_nameCountAggregateOutputType | null;
    _avg: Client_nameAvgAggregateOutputType | null;
    _sum: Client_nameSumAggregateOutputType | null;
    _min: Client_nameMinAggregateOutputType | null;
    _max: Client_nameMaxAggregateOutputType | null;
  };

  export type Client_nameAvgAggregateOutputType = {
    budget: number | null;
  };

  export type Client_nameSumAggregateOutputType = {
    budget: number | null;
  };

  export type Client_nameMinAggregateOutputType = {
    id: string | null;
    company_name: string | null;
    project_description: string | null;
    budget: number | null;
    deadline: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Client_nameMaxAggregateOutputType = {
    id: string | null;
    company_name: string | null;
    project_description: string | null;
    budget: number | null;
    deadline: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Client_nameCountAggregateOutputType = {
    id: number;
    company_name: number;
    project_description: number;
    budget: number;
    deadline: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Client_nameAvgAggregateInputType = {
    budget?: true;
  };

  export type Client_nameSumAggregateInputType = {
    budget?: true;
  };

  export type Client_nameMinAggregateInputType = {
    id?: true;
    company_name?: true;
    project_description?: true;
    budget?: true;
    deadline?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Client_nameMaxAggregateInputType = {
    id?: true;
    company_name?: true;
    project_description?: true;
    budget?: true;
    deadline?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Client_nameCountAggregateInputType = {
    id?: true;
    company_name?: true;
    project_description?: true;
    budget?: true;
    deadline?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Client_nameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_name to aggregate.
     */
    where?: client_nameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_names to fetch.
     */
    orderBy?: client_nameOrderByWithRelationInput | client_nameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: client_nameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_names from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_names.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned client_names
     **/
    _count?: true | Client_nameCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Client_nameAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Client_nameSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Client_nameMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Client_nameMaxAggregateInputType;
  };

  export type GetClient_nameAggregateType<T extends Client_nameAggregateArgs> = {
    [P in keyof T & keyof AggregateClient_name]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_name[P]>
      : GetScalarType<T[P], AggregateClient_name[P]>;
  };

  export type client_nameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_nameWhereInput;
    orderBy?: client_nameOrderByWithAggregationInput | client_nameOrderByWithAggregationInput[];
    by: Client_nameScalarFieldEnum[] | Client_nameScalarFieldEnum;
    having?: client_nameScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Client_nameCountAggregateInputType | true;
    _avg?: Client_nameAvgAggregateInputType;
    _sum?: Client_nameSumAggregateInputType;
    _min?: Client_nameMinAggregateInputType;
    _max?: Client_nameMaxAggregateInputType;
  };

  export type Client_nameGroupByOutputType = {
    id: string;
    company_name: string | null;
    project_description: string | null;
    budget: number | null;
    deadline: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Client_nameCountAggregateOutputType | null;
    _avg: Client_nameAvgAggregateOutputType | null;
    _sum: Client_nameSumAggregateOutputType | null;
    _min: Client_nameMinAggregateOutputType | null;
    _max: Client_nameMaxAggregateOutputType | null;
  };

  type GetClient_nameGroupByPayload<T extends client_nameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Client_nameGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Client_nameGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Client_nameGroupByOutputType[P]>
          : GetScalarType<T[P], Client_nameGroupByOutputType[P]>;
      }
    >
  >;

  export type client_nameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        company_name?: boolean;
        project_description?: boolean;
        budget?: boolean;
        deadline?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['client_name']
    >;

  export type client_nameSelectScalar = {
    id?: boolean;
    company_name?: boolean;
    project_description?: boolean;
    budget?: boolean;
    deadline?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type client_nameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $client_namePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'client_name';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        company_name: string | null;
        project_description: string | null;
        budget: number | null;
        deadline: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['client_name']
    >;
    composites: {};
  };

  type client_nameGetPayload<S extends boolean | null | undefined | client_nameDefaultArgs> = $Result.GetResult<
    Prisma.$client_namePayload,
    S
  >;

  type client_nameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    client_nameFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Client_nameCountAggregateInputType | true;
  };

  export interface client_nameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client_name']; meta: { name: 'client_name' } };
    /**
     * Find zero or one Client_name that matches the filter.
     * @param {client_nameFindUniqueArgs} args - Arguments to find a Client_name
     * @example
     * // Get one Client_name
     * const client_name = await prisma.client_name.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends client_nameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_nameFindUniqueArgs<ExtArgs>>,
    ): Prisma__client_nameClient<
      $Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Client_name that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {client_nameFindUniqueOrThrowArgs} args - Arguments to find a Client_name
     * @example
     * // Get one Client_name
     * const client_name = await prisma.client_name.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends client_nameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_nameFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__client_nameClient<
      $Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Client_name that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_nameFindFirstArgs} args - Arguments to find a Client_name
     * @example
     * // Get one Client_name
     * const client_name = await prisma.client_name.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends client_nameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_nameFindFirstArgs<ExtArgs>>,
    ): Prisma__client_nameClient<
      $Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Client_name that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_nameFindFirstOrThrowArgs} args - Arguments to find a Client_name
     * @example
     * // Get one Client_name
     * const client_name = await prisma.client_name.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends client_nameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_nameFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__client_nameClient<
      $Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Client_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_nameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_names
     * const client_names = await prisma.client_name.findMany()
     *
     * // Get first 10 Client_names
     * const client_names = await prisma.client_name.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const client_nameWithIdOnly = await prisma.client_name.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends client_nameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_nameFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Client_name.
     * @param {client_nameCreateArgs} args - Arguments to create a Client_name.
     * @example
     * // Create one Client_name
     * const Client_name = await prisma.client_name.create({
     *   data: {
     *     // ... data to create a Client_name
     *   }
     * })
     *
     **/
    create<T extends client_nameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_nameCreateArgs<ExtArgs>>,
    ): Prisma__client_nameClient<$Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Client_names.
     *     @param {client_nameCreateManyArgs} args - Arguments to create many Client_names.
     *     @example
     *     // Create many Client_names
     *     const client_name = await prisma.client_name.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends client_nameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_nameCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Client_name.
     * @param {client_nameDeleteArgs} args - Arguments to delete one Client_name.
     * @example
     * // Delete one Client_name
     * const Client_name = await prisma.client_name.delete({
     *   where: {
     *     // ... filter to delete one Client_name
     *   }
     * })
     *
     **/
    delete<T extends client_nameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_nameDeleteArgs<ExtArgs>>,
    ): Prisma__client_nameClient<$Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Client_name.
     * @param {client_nameUpdateArgs} args - Arguments to update one Client_name.
     * @example
     * // Update one Client_name
     * const client_name = await prisma.client_name.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends client_nameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_nameUpdateArgs<ExtArgs>>,
    ): Prisma__client_nameClient<$Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Client_names.
     * @param {client_nameDeleteManyArgs} args - Arguments to filter Client_names to delete.
     * @example
     * // Delete a few Client_names
     * const { count } = await prisma.client_name.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends client_nameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_nameDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Client_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_nameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_names
     * const client_name = await prisma.client_name.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends client_nameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_nameUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Client_name.
     * @param {client_nameUpsertArgs} args - Arguments to update or create a Client_name.
     * @example
     * // Update or create a Client_name
     * const client_name = await prisma.client_name.upsert({
     *   create: {
     *     // ... data to create a Client_name
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_name we want to update
     *   }
     * })
     **/
    upsert<T extends client_nameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_nameUpsertArgs<ExtArgs>>,
    ): Prisma__client_nameClient<$Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Client_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_nameCountArgs} args - Arguments to filter Client_names to count.
     * @example
     * // Count the number of Client_names
     * const count = await prisma.client_name.count({
     *   where: {
     *     // ... the filter for the Client_names we want to count
     *   }
     * })
     **/
    count<T extends client_nameCountArgs>(
      args?: Subset<T, client_nameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_nameCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client_name.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_nameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Client_nameAggregateArgs>(
      args: Subset<T, Client_nameAggregateArgs>,
    ): Prisma.PrismaPromise<GetClient_nameAggregateType<T>>;

    /**
     * Group by Client_name.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_nameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends client_nameGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_nameGroupByArgs['orderBy'] }
        : { orderBy?: client_nameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, client_nameGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClient_nameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the client_name model
     */
    readonly fields: client_nameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_name.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_nameClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the client_name model
   */
  interface client_nameFieldRefs {
    readonly id: FieldRef<'client_name', 'String'>;
    readonly company_name: FieldRef<'client_name', 'String'>;
    readonly project_description: FieldRef<'client_name', 'String'>;
    readonly budget: FieldRef<'client_name', 'Int'>;
    readonly deadline: FieldRef<'client_name', 'DateTime'>;
    readonly user_id: FieldRef<'client_name', 'String'>;
    readonly created_at: FieldRef<'client_name', 'DateTime'>;
    readonly updated_at: FieldRef<'client_name', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * client_name findUnique
   */
  export type client_nameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * Filter, which client_name to fetch.
     */
    where: client_nameWhereUniqueInput;
  };

  /**
   * client_name findUniqueOrThrow
   */
  export type client_nameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * Filter, which client_name to fetch.
     */
    where: client_nameWhereUniqueInput;
  };

  /**
   * client_name findFirst
   */
  export type client_nameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * Filter, which client_name to fetch.
     */
    where?: client_nameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_names to fetch.
     */
    orderBy?: client_nameOrderByWithRelationInput | client_nameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for client_names.
     */
    cursor?: client_nameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_names from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_names.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of client_names.
     */
    distinct?: Client_nameScalarFieldEnum | Client_nameScalarFieldEnum[];
  };

  /**
   * client_name findFirstOrThrow
   */
  export type client_nameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * Filter, which client_name to fetch.
     */
    where?: client_nameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_names to fetch.
     */
    orderBy?: client_nameOrderByWithRelationInput | client_nameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for client_names.
     */
    cursor?: client_nameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_names from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_names.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of client_names.
     */
    distinct?: Client_nameScalarFieldEnum | Client_nameScalarFieldEnum[];
  };

  /**
   * client_name findMany
   */
  export type client_nameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * Filter, which client_names to fetch.
     */
    where?: client_nameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_names to fetch.
     */
    orderBy?: client_nameOrderByWithRelationInput | client_nameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing client_names.
     */
    cursor?: client_nameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_names from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_names.
     */
    skip?: number;
    distinct?: Client_nameScalarFieldEnum | Client_nameScalarFieldEnum[];
  };

  /**
   * client_name create
   */
  export type client_nameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * The data needed to create a client_name.
     */
    data: XOR<client_nameCreateInput, client_nameUncheckedCreateInput>;
  };

  /**
   * client_name createMany
   */
  export type client_nameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_names.
     */
    data: client_nameCreateManyInput | client_nameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * client_name update
   */
  export type client_nameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * The data needed to update a client_name.
     */
    data: XOR<client_nameUpdateInput, client_nameUncheckedUpdateInput>;
    /**
     * Choose, which client_name to update.
     */
    where: client_nameWhereUniqueInput;
  };

  /**
   * client_name updateMany
   */
  export type client_nameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_names.
     */
    data: XOR<client_nameUpdateManyMutationInput, client_nameUncheckedUpdateManyInput>;
    /**
     * Filter which client_names to update
     */
    where?: client_nameWhereInput;
  };

  /**
   * client_name upsert
   */
  export type client_nameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * The filter to search for the client_name to update in case it exists.
     */
    where: client_nameWhereUniqueInput;
    /**
     * In case the client_name found by the `where` argument doesn't exist, create a new client_name with this data.
     */
    create: XOR<client_nameCreateInput, client_nameUncheckedCreateInput>;
    /**
     * In case the client_name was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_nameUpdateInput, client_nameUncheckedUpdateInput>;
  };

  /**
   * client_name delete
   */
  export type client_nameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    /**
     * Filter which client_name to delete.
     */
    where: client_nameWhereUniqueInput;
  };

  /**
   * client_name deleteMany
   */
  export type client_nameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_names to delete
     */
    where?: client_nameWhereInput;
  };

  /**
   * client_name without action
   */
  export type client_nameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    website: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone_number?: boolean;
      website?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      agency_owner?: boolean | company$agency_ownerArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    website?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency_owner?: boolean | company$agency_ownerArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      agency_owner: Prisma.$agency_ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        website: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    agency_owner<T extends company$agency_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$agency_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly phone_number: FieldRef<'company', 'String'>;
    readonly website: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.agency_owner
   */
  export type company$agency_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    where?: agency_ownerWhereInput;
    orderBy?: agency_ownerOrderByWithRelationInput | agency_ownerOrderByWithRelationInput[];
    cursor?: agency_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Agency_ownerScalarFieldEnum | Agency_ownerScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model freelancer
   */

  export type AggregateFreelancer = {
    _count: FreelancerCountAggregateOutputType | null;
    _avg: FreelancerAvgAggregateOutputType | null;
    _sum: FreelancerSumAggregateOutputType | null;
    _min: FreelancerMinAggregateOutputType | null;
    _max: FreelancerMaxAggregateOutputType | null;
  };

  export type FreelancerAvgAggregateOutputType = {
    hourly_rate: number | null;
  };

  export type FreelancerSumAggregateOutputType = {
    hourly_rate: number | null;
  };

  export type FreelancerMinAggregateOutputType = {
    id: string | null;
    skills: string | null;
    experience: string | null;
    hourly_rate: number | null;
    availability: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FreelancerMaxAggregateOutputType = {
    id: string | null;
    skills: string | null;
    experience: string | null;
    hourly_rate: number | null;
    availability: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FreelancerCountAggregateOutputType = {
    id: number;
    skills: number;
    experience: number;
    hourly_rate: number;
    availability: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FreelancerAvgAggregateInputType = {
    hourly_rate?: true;
  };

  export type FreelancerSumAggregateInputType = {
    hourly_rate?: true;
  };

  export type FreelancerMinAggregateInputType = {
    id?: true;
    skills?: true;
    experience?: true;
    hourly_rate?: true;
    availability?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FreelancerMaxAggregateInputType = {
    id?: true;
    skills?: true;
    experience?: true;
    hourly_rate?: true;
    availability?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FreelancerCountAggregateInputType = {
    id?: true;
    skills?: true;
    experience?: true;
    hourly_rate?: true;
    availability?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FreelancerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelancer to aggregate.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned freelancers
     **/
    _count?: true | FreelancerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FreelancerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FreelancerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FreelancerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FreelancerMaxAggregateInputType;
  };

  export type GetFreelancerAggregateType<T extends FreelancerAggregateArgs> = {
    [P in keyof T & keyof AggregateFreelancer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelancer[P]>
      : GetScalarType<T[P], AggregateFreelancer[P]>;
  };

  export type freelancerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freelancerWhereInput;
    orderBy?: freelancerOrderByWithAggregationInput | freelancerOrderByWithAggregationInput[];
    by: FreelancerScalarFieldEnum[] | FreelancerScalarFieldEnum;
    having?: freelancerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FreelancerCountAggregateInputType | true;
    _avg?: FreelancerAvgAggregateInputType;
    _sum?: FreelancerSumAggregateInputType;
    _min?: FreelancerMinAggregateInputType;
    _max?: FreelancerMaxAggregateInputType;
  };

  export type FreelancerGroupByOutputType = {
    id: string;
    skills: string | null;
    experience: string | null;
    hourly_rate: number | null;
    availability: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: FreelancerCountAggregateOutputType | null;
    _avg: FreelancerAvgAggregateOutputType | null;
    _sum: FreelancerSumAggregateOutputType | null;
    _min: FreelancerMinAggregateOutputType | null;
    _max: FreelancerMaxAggregateOutputType | null;
  };

  type GetFreelancerGroupByPayload<T extends freelancerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreelancerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FreelancerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FreelancerGroupByOutputType[P]>
          : GetScalarType<T[P], FreelancerGroupByOutputType[P]>;
      }
    >
  >;

  export type freelancerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        skills?: boolean;
        experience?: boolean;
        hourly_rate?: boolean;
        availability?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['freelancer']
    >;

  export type freelancerSelectScalar = {
    id?: boolean;
    skills?: boolean;
    experience?: boolean;
    hourly_rate?: boolean;
    availability?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type freelancerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $freelancerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'freelancer';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        skills: string | null;
        experience: string | null;
        hourly_rate: number | null;
        availability: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['freelancer']
    >;
    composites: {};
  };

  type freelancerGetPayload<S extends boolean | null | undefined | freelancerDefaultArgs> = $Result.GetResult<
    Prisma.$freelancerPayload,
    S
  >;

  type freelancerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    freelancerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: FreelancerCountAggregateInputType | true;
  };

  export interface freelancerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['freelancer']; meta: { name: 'freelancer' } };
    /**
     * Find zero or one Freelancer that matches the filter.
     * @param {freelancerFindUniqueArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends freelancerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerFindUniqueArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Freelancer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {freelancerFindUniqueOrThrowArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends freelancerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Freelancer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindFirstArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends freelancerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindFirstArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Freelancer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindFirstOrThrowArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends freelancerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Freelancers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freelancers
     * const freelancers = await prisma.freelancer.findMany()
     *
     * // Get first 10 Freelancers
     * const freelancers = await prisma.freelancer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const freelancerWithIdOnly = await prisma.freelancer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends freelancerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Freelancer.
     * @param {freelancerCreateArgs} args - Arguments to create a Freelancer.
     * @example
     * // Create one Freelancer
     * const Freelancer = await prisma.freelancer.create({
     *   data: {
     *     // ... data to create a Freelancer
     *   }
     * })
     *
     **/
    create<T extends freelancerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerCreateArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Freelancers.
     *     @param {freelancerCreateManyArgs} args - Arguments to create many Freelancers.
     *     @example
     *     // Create many Freelancers
     *     const freelancer = await prisma.freelancer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends freelancerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Freelancer.
     * @param {freelancerDeleteArgs} args - Arguments to delete one Freelancer.
     * @example
     * // Delete one Freelancer
     * const Freelancer = await prisma.freelancer.delete({
     *   where: {
     *     // ... filter to delete one Freelancer
     *   }
     * })
     *
     **/
    delete<T extends freelancerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerDeleteArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Freelancer.
     * @param {freelancerUpdateArgs} args - Arguments to update one Freelancer.
     * @example
     * // Update one Freelancer
     * const freelancer = await prisma.freelancer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends freelancerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerUpdateArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Freelancers.
     * @param {freelancerDeleteManyArgs} args - Arguments to filter Freelancers to delete.
     * @example
     * // Delete a few Freelancers
     * const { count } = await prisma.freelancer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends freelancerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Freelancers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freelancers
     * const freelancer = await prisma.freelancer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends freelancerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Freelancer.
     * @param {freelancerUpsertArgs} args - Arguments to update or create a Freelancer.
     * @example
     * // Update or create a Freelancer
     * const freelancer = await prisma.freelancer.upsert({
     *   create: {
     *     // ... data to create a Freelancer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freelancer we want to update
     *   }
     * })
     **/
    upsert<T extends freelancerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerUpsertArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Freelancers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerCountArgs} args - Arguments to filter Freelancers to count.
     * @example
     * // Count the number of Freelancers
     * const count = await prisma.freelancer.count({
     *   where: {
     *     // ... the filter for the Freelancers we want to count
     *   }
     * })
     **/
    count<T extends freelancerCountArgs>(
      args?: Subset<T, freelancerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreelancerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Freelancer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FreelancerAggregateArgs>(
      args: Subset<T, FreelancerAggregateArgs>,
    ): Prisma.PrismaPromise<GetFreelancerAggregateType<T>>;

    /**
     * Group by Freelancer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends freelancerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freelancerGroupByArgs['orderBy'] }
        : { orderBy?: freelancerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, freelancerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFreelancerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the freelancer model
     */
    readonly fields: freelancerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freelancer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freelancerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the freelancer model
   */
  interface freelancerFieldRefs {
    readonly id: FieldRef<'freelancer', 'String'>;
    readonly skills: FieldRef<'freelancer', 'String'>;
    readonly experience: FieldRef<'freelancer', 'String'>;
    readonly hourly_rate: FieldRef<'freelancer', 'Int'>;
    readonly availability: FieldRef<'freelancer', 'String'>;
    readonly user_id: FieldRef<'freelancer', 'String'>;
    readonly created_at: FieldRef<'freelancer', 'DateTime'>;
    readonly updated_at: FieldRef<'freelancer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * freelancer findUnique
   */
  export type freelancerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer findUniqueOrThrow
   */
  export type freelancerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer findFirst
   */
  export type freelancerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for freelancers.
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of freelancers.
     */
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * freelancer findFirstOrThrow
   */
  export type freelancerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for freelancers.
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of freelancers.
     */
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * freelancer findMany
   */
  export type freelancerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancers to fetch.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing freelancers.
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * freelancer create
   */
  export type freelancerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * The data needed to create a freelancer.
     */
    data: XOR<freelancerCreateInput, freelancerUncheckedCreateInput>;
  };

  /**
   * freelancer createMany
   */
  export type freelancerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freelancers.
     */
    data: freelancerCreateManyInput | freelancerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * freelancer update
   */
  export type freelancerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * The data needed to update a freelancer.
     */
    data: XOR<freelancerUpdateInput, freelancerUncheckedUpdateInput>;
    /**
     * Choose, which freelancer to update.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer updateMany
   */
  export type freelancerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freelancers.
     */
    data: XOR<freelancerUpdateManyMutationInput, freelancerUncheckedUpdateManyInput>;
    /**
     * Filter which freelancers to update
     */
    where?: freelancerWhereInput;
  };

  /**
   * freelancer upsert
   */
  export type freelancerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * The filter to search for the freelancer to update in case it exists.
     */
    where: freelancerWhereUniqueInput;
    /**
     * In case the freelancer found by the `where` argument doesn't exist, create a new freelancer with this data.
     */
    create: XOR<freelancerCreateInput, freelancerUncheckedCreateInput>;
    /**
     * In case the freelancer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freelancerUpdateInput, freelancerUncheckedUpdateInput>;
  };

  /**
   * freelancer delete
   */
  export type freelancerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter which freelancer to delete.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer deleteMany
   */
  export type freelancerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelancers to delete
     */
    where?: freelancerWhereInput;
  };

  /**
   * freelancer without action
   */
  export type freelancerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      agency_member?: boolean | user$agency_memberArgs<ExtArgs>;
      agency_owner?: boolean | user$agency_ownerArgs<ExtArgs>;
      client_name?: boolean | user$client_nameArgs<ExtArgs>;
      freelancer?: boolean | user$freelancerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency_member?: boolean | user$agency_memberArgs<ExtArgs>;
    agency_owner?: boolean | user$agency_ownerArgs<ExtArgs>;
    client_name?: boolean | user$client_nameArgs<ExtArgs>;
    freelancer?: boolean | user$freelancerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      agency_member: Prisma.$agency_memberPayload<ExtArgs>[];
      agency_owner: Prisma.$agency_ownerPayload<ExtArgs>[];
      client_name: Prisma.$client_namePayload<ExtArgs>[];
      freelancer: Prisma.$freelancerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    agency_member<T extends user$agency_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$agency_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agency_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    agency_owner<T extends user$agency_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$agency_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agency_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    client_name<T extends user$client_nameArgs<ExtArgs> = {}>(
      args?: Subset<T, user$client_nameArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$client_namePayload<ExtArgs>, T, 'findMany'> | Null>;

    freelancer<T extends user$freelancerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$freelancerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.agency_member
   */
  export type user$agency_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_member
     */
    select?: agency_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_memberInclude<ExtArgs> | null;
    where?: agency_memberWhereInput;
    orderBy?: agency_memberOrderByWithRelationInput | agency_memberOrderByWithRelationInput[];
    cursor?: agency_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Agency_memberScalarFieldEnum | Agency_memberScalarFieldEnum[];
  };

  /**
   * user.agency_owner
   */
  export type user$agency_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agency_owner
     */
    select?: agency_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agency_ownerInclude<ExtArgs> | null;
    where?: agency_ownerWhereInput;
    orderBy?: agency_ownerOrderByWithRelationInput | agency_ownerOrderByWithRelationInput[];
    cursor?: agency_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Agency_ownerScalarFieldEnum | Agency_ownerScalarFieldEnum[];
  };

  /**
   * user.client_name
   */
  export type user$client_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_name
     */
    select?: client_nameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_nameInclude<ExtArgs> | null;
    where?: client_nameWhereInput;
    orderBy?: client_nameOrderByWithRelationInput | client_nameOrderByWithRelationInput[];
    cursor?: client_nameWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Client_nameScalarFieldEnum | Client_nameScalarFieldEnum[];
  };

  /**
   * user.freelancer
   */
  export type user$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    where?: freelancerWhereInput;
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    cursor?: freelancerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Agency_memberScalarFieldEnum: {
    id: 'id';
    role: 'role';
    joining_date: 'joining_date';
    leaving_date: 'leaving_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Agency_memberScalarFieldEnum =
    (typeof Agency_memberScalarFieldEnum)[keyof typeof Agency_memberScalarFieldEnum];

  export const Agency_ownerScalarFieldEnum: {
    id: 'id';
    company_id: 'company_id';
    joining_date: 'joining_date';
    leaving_date: 'leaving_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Agency_ownerScalarFieldEnum =
    (typeof Agency_ownerScalarFieldEnum)[keyof typeof Agency_ownerScalarFieldEnum];

  export const Client_nameScalarFieldEnum: {
    id: 'id';
    company_name: 'company_name';
    project_description: 'project_description';
    budget: 'budget';
    deadline: 'deadline';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Client_nameScalarFieldEnum = (typeof Client_nameScalarFieldEnum)[keyof typeof Client_nameScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    website: 'website';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const FreelancerScalarFieldEnum: {
    id: 'id';
    skills: 'skills';
    experience: 'experience';
    hourly_rate: 'hourly_rate';
    availability: 'availability';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FreelancerScalarFieldEnum = (typeof FreelancerScalarFieldEnum)[keyof typeof FreelancerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type agency_memberWhereInput = {
    AND?: agency_memberWhereInput | agency_memberWhereInput[];
    OR?: agency_memberWhereInput[];
    NOT?: agency_memberWhereInput | agency_memberWhereInput[];
    id?: UuidFilter<'agency_member'> | string;
    role?: StringNullableFilter<'agency_member'> | string | null;
    joining_date?: DateTimeNullableFilter<'agency_member'> | Date | string | null;
    leaving_date?: DateTimeNullableFilter<'agency_member'> | Date | string | null;
    user_id?: UuidFilter<'agency_member'> | string;
    created_at?: DateTimeFilter<'agency_member'> | Date | string;
    updated_at?: DateTimeFilter<'agency_member'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type agency_memberOrderByWithRelationInput = {
    id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    joining_date?: SortOrderInput | SortOrder;
    leaving_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type agency_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: agency_memberWhereInput | agency_memberWhereInput[];
      OR?: agency_memberWhereInput[];
      NOT?: agency_memberWhereInput | agency_memberWhereInput[];
      role?: StringNullableFilter<'agency_member'> | string | null;
      joining_date?: DateTimeNullableFilter<'agency_member'> | Date | string | null;
      leaving_date?: DateTimeNullableFilter<'agency_member'> | Date | string | null;
      user_id?: UuidFilter<'agency_member'> | string;
      created_at?: DateTimeFilter<'agency_member'> | Date | string;
      updated_at?: DateTimeFilter<'agency_member'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type agency_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    joining_date?: SortOrderInput | SortOrder;
    leaving_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: agency_memberCountOrderByAggregateInput;
    _max?: agency_memberMaxOrderByAggregateInput;
    _min?: agency_memberMinOrderByAggregateInput;
  };

  export type agency_memberScalarWhereWithAggregatesInput = {
    AND?: agency_memberScalarWhereWithAggregatesInput | agency_memberScalarWhereWithAggregatesInput[];
    OR?: agency_memberScalarWhereWithAggregatesInput[];
    NOT?: agency_memberScalarWhereWithAggregatesInput | agency_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'agency_member'> | string;
    role?: StringNullableWithAggregatesFilter<'agency_member'> | string | null;
    joining_date?: DateTimeNullableWithAggregatesFilter<'agency_member'> | Date | string | null;
    leaving_date?: DateTimeNullableWithAggregatesFilter<'agency_member'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'agency_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'agency_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'agency_member'> | Date | string;
  };

  export type agency_ownerWhereInput = {
    AND?: agency_ownerWhereInput | agency_ownerWhereInput[];
    OR?: agency_ownerWhereInput[];
    NOT?: agency_ownerWhereInput | agency_ownerWhereInput[];
    id?: UuidFilter<'agency_owner'> | string;
    company_id?: UuidFilter<'agency_owner'> | string;
    joining_date?: DateTimeNullableFilter<'agency_owner'> | Date | string | null;
    leaving_date?: DateTimeNullableFilter<'agency_owner'> | Date | string | null;
    user_id?: UuidFilter<'agency_owner'> | string;
    created_at?: DateTimeFilter<'agency_owner'> | Date | string;
    updated_at?: DateTimeFilter<'agency_owner'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type agency_ownerOrderByWithRelationInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    joining_date?: SortOrderInput | SortOrder;
    leaving_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type agency_ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: agency_ownerWhereInput | agency_ownerWhereInput[];
      OR?: agency_ownerWhereInput[];
      NOT?: agency_ownerWhereInput | agency_ownerWhereInput[];
      company_id?: UuidFilter<'agency_owner'> | string;
      joining_date?: DateTimeNullableFilter<'agency_owner'> | Date | string | null;
      leaving_date?: DateTimeNullableFilter<'agency_owner'> | Date | string | null;
      user_id?: UuidFilter<'agency_owner'> | string;
      created_at?: DateTimeFilter<'agency_owner'> | Date | string;
      updated_at?: DateTimeFilter<'agency_owner'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type agency_ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    joining_date?: SortOrderInput | SortOrder;
    leaving_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: agency_ownerCountOrderByAggregateInput;
    _max?: agency_ownerMaxOrderByAggregateInput;
    _min?: agency_ownerMinOrderByAggregateInput;
  };

  export type agency_ownerScalarWhereWithAggregatesInput = {
    AND?: agency_ownerScalarWhereWithAggregatesInput | agency_ownerScalarWhereWithAggregatesInput[];
    OR?: agency_ownerScalarWhereWithAggregatesInput[];
    NOT?: agency_ownerScalarWhereWithAggregatesInput | agency_ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'agency_owner'> | string;
    company_id?: UuidWithAggregatesFilter<'agency_owner'> | string;
    joining_date?: DateTimeNullableWithAggregatesFilter<'agency_owner'> | Date | string | null;
    leaving_date?: DateTimeNullableWithAggregatesFilter<'agency_owner'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'agency_owner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'agency_owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'agency_owner'> | Date | string;
  };

  export type client_nameWhereInput = {
    AND?: client_nameWhereInput | client_nameWhereInput[];
    OR?: client_nameWhereInput[];
    NOT?: client_nameWhereInput | client_nameWhereInput[];
    id?: UuidFilter<'client_name'> | string;
    company_name?: StringNullableFilter<'client_name'> | string | null;
    project_description?: StringNullableFilter<'client_name'> | string | null;
    budget?: IntNullableFilter<'client_name'> | number | null;
    deadline?: DateTimeNullableFilter<'client_name'> | Date | string | null;
    user_id?: UuidFilter<'client_name'> | string;
    created_at?: DateTimeFilter<'client_name'> | Date | string;
    updated_at?: DateTimeFilter<'client_name'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type client_nameOrderByWithRelationInput = {
    id?: SortOrder;
    company_name?: SortOrderInput | SortOrder;
    project_description?: SortOrderInput | SortOrder;
    budget?: SortOrderInput | SortOrder;
    deadline?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type client_nameWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: client_nameWhereInput | client_nameWhereInput[];
      OR?: client_nameWhereInput[];
      NOT?: client_nameWhereInput | client_nameWhereInput[];
      company_name?: StringNullableFilter<'client_name'> | string | null;
      project_description?: StringNullableFilter<'client_name'> | string | null;
      budget?: IntNullableFilter<'client_name'> | number | null;
      deadline?: DateTimeNullableFilter<'client_name'> | Date | string | null;
      user_id?: UuidFilter<'client_name'> | string;
      created_at?: DateTimeFilter<'client_name'> | Date | string;
      updated_at?: DateTimeFilter<'client_name'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type client_nameOrderByWithAggregationInput = {
    id?: SortOrder;
    company_name?: SortOrderInput | SortOrder;
    project_description?: SortOrderInput | SortOrder;
    budget?: SortOrderInput | SortOrder;
    deadline?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: client_nameCountOrderByAggregateInput;
    _avg?: client_nameAvgOrderByAggregateInput;
    _max?: client_nameMaxOrderByAggregateInput;
    _min?: client_nameMinOrderByAggregateInput;
    _sum?: client_nameSumOrderByAggregateInput;
  };

  export type client_nameScalarWhereWithAggregatesInput = {
    AND?: client_nameScalarWhereWithAggregatesInput | client_nameScalarWhereWithAggregatesInput[];
    OR?: client_nameScalarWhereWithAggregatesInput[];
    NOT?: client_nameScalarWhereWithAggregatesInput | client_nameScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'client_name'> | string;
    company_name?: StringNullableWithAggregatesFilter<'client_name'> | string | null;
    project_description?: StringNullableWithAggregatesFilter<'client_name'> | string | null;
    budget?: IntNullableWithAggregatesFilter<'client_name'> | number | null;
    deadline?: DateTimeNullableWithAggregatesFilter<'client_name'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'client_name'> | string;
    created_at?: DateTimeWithAggregatesFilter<'client_name'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'client_name'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    phone_number?: StringNullableFilter<'company'> | string | null;
    website?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    agency_owner?: Agency_ownerListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    agency_owner?: agency_ownerOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      phone_number?: StringNullableFilter<'company'> | string | null;
      website?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      agency_owner?: Agency_ownerListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'company'> | string | null;
    website?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type freelancerWhereInput = {
    AND?: freelancerWhereInput | freelancerWhereInput[];
    OR?: freelancerWhereInput[];
    NOT?: freelancerWhereInput | freelancerWhereInput[];
    id?: UuidFilter<'freelancer'> | string;
    skills?: StringNullableFilter<'freelancer'> | string | null;
    experience?: StringNullableFilter<'freelancer'> | string | null;
    hourly_rate?: IntNullableFilter<'freelancer'> | number | null;
    availability?: StringNullableFilter<'freelancer'> | string | null;
    user_id?: UuidFilter<'freelancer'> | string;
    created_at?: DateTimeFilter<'freelancer'> | Date | string;
    updated_at?: DateTimeFilter<'freelancer'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type freelancerOrderByWithRelationInput = {
    id?: SortOrder;
    skills?: SortOrderInput | SortOrder;
    experience?: SortOrderInput | SortOrder;
    hourly_rate?: SortOrderInput | SortOrder;
    availability?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type freelancerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: freelancerWhereInput | freelancerWhereInput[];
      OR?: freelancerWhereInput[];
      NOT?: freelancerWhereInput | freelancerWhereInput[];
      skills?: StringNullableFilter<'freelancer'> | string | null;
      experience?: StringNullableFilter<'freelancer'> | string | null;
      hourly_rate?: IntNullableFilter<'freelancer'> | number | null;
      availability?: StringNullableFilter<'freelancer'> | string | null;
      user_id?: UuidFilter<'freelancer'> | string;
      created_at?: DateTimeFilter<'freelancer'> | Date | string;
      updated_at?: DateTimeFilter<'freelancer'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type freelancerOrderByWithAggregationInput = {
    id?: SortOrder;
    skills?: SortOrderInput | SortOrder;
    experience?: SortOrderInput | SortOrder;
    hourly_rate?: SortOrderInput | SortOrder;
    availability?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: freelancerCountOrderByAggregateInput;
    _avg?: freelancerAvgOrderByAggregateInput;
    _max?: freelancerMaxOrderByAggregateInput;
    _min?: freelancerMinOrderByAggregateInput;
    _sum?: freelancerSumOrderByAggregateInput;
  };

  export type freelancerScalarWhereWithAggregatesInput = {
    AND?: freelancerScalarWhereWithAggregatesInput | freelancerScalarWhereWithAggregatesInput[];
    OR?: freelancerScalarWhereWithAggregatesInput[];
    NOT?: freelancerScalarWhereWithAggregatesInput | freelancerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'freelancer'> | string;
    skills?: StringNullableWithAggregatesFilter<'freelancer'> | string | null;
    experience?: StringNullableWithAggregatesFilter<'freelancer'> | string | null;
    hourly_rate?: IntNullableWithAggregatesFilter<'freelancer'> | number | null;
    availability?: StringNullableWithAggregatesFilter<'freelancer'> | string | null;
    user_id?: UuidWithAggregatesFilter<'freelancer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'freelancer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'freelancer'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    agency_member?: Agency_memberListRelationFilter;
    agency_owner?: Agency_ownerListRelationFilter;
    client_name?: Client_nameListRelationFilter;
    freelancer?: FreelancerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    agency_member?: agency_memberOrderByRelationAggregateInput;
    agency_owner?: agency_ownerOrderByRelationAggregateInput;
    client_name?: client_nameOrderByRelationAggregateInput;
    freelancer?: freelancerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      agency_member?: Agency_memberListRelationFilter;
      agency_owner?: Agency_ownerListRelationFilter;
      client_name?: Client_nameListRelationFilter;
      freelancer?: FreelancerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type agency_memberCreateInput = {
    id?: string;
    role?: string | null;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAgency_memberInput;
  };

  export type agency_memberUncheckedCreateInput = {
    id?: string;
    role?: string | null;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAgency_memberNestedInput;
  };

  export type agency_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_memberCreateManyInput = {
    id?: string;
    role?: string | null;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_ownerCreateInput = {
    id?: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAgency_ownerInput;
    user: userCreateNestedOneWithoutAgency_ownerInput;
  };

  export type agency_ownerUncheckedCreateInput = {
    id?: string;
    company_id: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAgency_ownerNestedInput;
    user?: userUpdateOneRequiredWithoutAgency_ownerNestedInput;
  };

  export type agency_ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_ownerCreateManyInput = {
    id?: string;
    company_id: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_nameCreateInput = {
    id?: string;
    company_name?: string | null;
    project_description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutClient_nameInput;
  };

  export type client_nameUncheckedCreateInput = {
    id?: string;
    company_name?: string | null;
    project_description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_nameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutClient_nameNestedInput;
  };

  export type client_nameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_nameCreateManyInput = {
    id?: string;
    company_name?: string | null;
    project_description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_nameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_nameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    agency_owner?: agency_ownerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    agency_owner?: agency_ownerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    agency_owner?: agency_ownerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    agency_owner?: agency_ownerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type freelancerCreateInput = {
    id?: string;
    skills?: string | null;
    experience?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFreelancerInput;
  };

  export type freelancerUncheckedCreateInput = {
    id?: string;
    skills?: string | null;
    experience?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelancerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFreelancerNestedInput;
  };

  export type freelancerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelancerCreateManyInput = {
    id?: string;
    skills?: string | null;
    experience?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelancerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelancerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberCreateNestedManyWithoutUserInput;
    agency_owner?: agency_ownerCreateNestedManyWithoutUserInput;
    client_name?: client_nameCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberUncheckedCreateNestedManyWithoutUserInput;
    agency_owner?: agency_ownerUncheckedCreateNestedManyWithoutUserInput;
    client_name?: client_nameUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUpdateManyWithoutUserNestedInput;
    agency_owner?: agency_ownerUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUncheckedUpdateManyWithoutUserNestedInput;
    agency_owner?: agency_ownerUncheckedUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type agency_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    role?: SortOrder;
    joining_date?: SortOrder;
    leaving_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agency_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    role?: SortOrder;
    joining_date?: SortOrder;
    leaving_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agency_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    role?: SortOrder;
    joining_date?: SortOrder;
    leaving_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type agency_ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    joining_date?: SortOrder;
    leaving_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agency_ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    joining_date?: SortOrder;
    leaving_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agency_ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    joining_date?: SortOrder;
    leaving_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type client_nameCountOrderByAggregateInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    project_description?: SortOrder;
    budget?: SortOrder;
    deadline?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type client_nameAvgOrderByAggregateInput = {
    budget?: SortOrder;
  };

  export type client_nameMaxOrderByAggregateInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    project_description?: SortOrder;
    budget?: SortOrder;
    deadline?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type client_nameMinOrderByAggregateInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    project_description?: SortOrder;
    budget?: SortOrder;
    deadline?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type client_nameSumOrderByAggregateInput = {
    budget?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type Agency_ownerListRelationFilter = {
    every?: agency_ownerWhereInput;
    some?: agency_ownerWhereInput;
    none?: agency_ownerWhereInput;
  };

  export type agency_ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type freelancerCountOrderByAggregateInput = {
    id?: SortOrder;
    skills?: SortOrder;
    experience?: SortOrder;
    hourly_rate?: SortOrder;
    availability?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerAvgOrderByAggregateInput = {
    hourly_rate?: SortOrder;
  };

  export type freelancerMaxOrderByAggregateInput = {
    id?: SortOrder;
    skills?: SortOrder;
    experience?: SortOrder;
    hourly_rate?: SortOrder;
    availability?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerMinOrderByAggregateInput = {
    id?: SortOrder;
    skills?: SortOrder;
    experience?: SortOrder;
    hourly_rate?: SortOrder;
    availability?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerSumOrderByAggregateInput = {
    hourly_rate?: SortOrder;
  };

  export type Agency_memberListRelationFilter = {
    every?: agency_memberWhereInput;
    some?: agency_memberWhereInput;
    none?: agency_memberWhereInput;
  };

  export type Client_nameListRelationFilter = {
    every?: client_nameWhereInput;
    some?: client_nameWhereInput;
    none?: client_nameWhereInput;
  };

  export type FreelancerListRelationFilter = {
    every?: freelancerWhereInput;
    some?: freelancerWhereInput;
    none?: freelancerWhereInput;
  };

  export type agency_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type client_nameOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type freelancerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutAgency_memberInput = {
    create?: XOR<userCreateWithoutAgency_memberInput, userUncheckedCreateWithoutAgency_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutAgency_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutAgency_memberNestedInput = {
    create?: XOR<userCreateWithoutAgency_memberInput, userUncheckedCreateWithoutAgency_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutAgency_memberInput;
    upsert?: userUpsertWithoutAgency_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAgency_memberInput, userUpdateWithoutAgency_memberInput>,
      userUncheckedUpdateWithoutAgency_memberInput
    >;
  };

  export type companyCreateNestedOneWithoutAgency_ownerInput = {
    create?: XOR<companyCreateWithoutAgency_ownerInput, companyUncheckedCreateWithoutAgency_ownerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutAgency_ownerInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAgency_ownerInput = {
    create?: XOR<userCreateWithoutAgency_ownerInput, userUncheckedCreateWithoutAgency_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutAgency_ownerInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutAgency_ownerNestedInput = {
    create?: XOR<companyCreateWithoutAgency_ownerInput, companyUncheckedCreateWithoutAgency_ownerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutAgency_ownerInput;
    upsert?: companyUpsertWithoutAgency_ownerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutAgency_ownerInput, companyUpdateWithoutAgency_ownerInput>,
      companyUncheckedUpdateWithoutAgency_ownerInput
    >;
  };

  export type userUpdateOneRequiredWithoutAgency_ownerNestedInput = {
    create?: XOR<userCreateWithoutAgency_ownerInput, userUncheckedCreateWithoutAgency_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutAgency_ownerInput;
    upsert?: userUpsertWithoutAgency_ownerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAgency_ownerInput, userUpdateWithoutAgency_ownerInput>,
      userUncheckedUpdateWithoutAgency_ownerInput
    >;
  };

  export type userCreateNestedOneWithoutClient_nameInput = {
    create?: XOR<userCreateWithoutClient_nameInput, userUncheckedCreateWithoutClient_nameInput>;
    connectOrCreate?: userCreateOrConnectWithoutClient_nameInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutClient_nameNestedInput = {
    create?: XOR<userCreateWithoutClient_nameInput, userUncheckedCreateWithoutClient_nameInput>;
    connectOrCreate?: userCreateOrConnectWithoutClient_nameInput;
    upsert?: userUpsertWithoutClient_nameInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClient_nameInput, userUpdateWithoutClient_nameInput>,
      userUncheckedUpdateWithoutClient_nameInput
    >;
  };

  export type agency_ownerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<agency_ownerCreateWithoutCompanyInput, agency_ownerUncheckedCreateWithoutCompanyInput>
      | agency_ownerCreateWithoutCompanyInput[]
      | agency_ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutCompanyInput | agency_ownerCreateOrConnectWithoutCompanyInput[];
    createMany?: agency_ownerCreateManyCompanyInputEnvelope;
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
  };

  export type agency_ownerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<agency_ownerCreateWithoutCompanyInput, agency_ownerUncheckedCreateWithoutCompanyInput>
      | agency_ownerCreateWithoutCompanyInput[]
      | agency_ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutCompanyInput | agency_ownerCreateOrConnectWithoutCompanyInput[];
    createMany?: agency_ownerCreateManyCompanyInputEnvelope;
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
  };

  export type agency_ownerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<agency_ownerCreateWithoutCompanyInput, agency_ownerUncheckedCreateWithoutCompanyInput>
      | agency_ownerCreateWithoutCompanyInput[]
      | agency_ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutCompanyInput | agency_ownerCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | agency_ownerUpsertWithWhereUniqueWithoutCompanyInput
      | agency_ownerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: agency_ownerCreateManyCompanyInputEnvelope;
    set?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    disconnect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    delete?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    update?:
      | agency_ownerUpdateWithWhereUniqueWithoutCompanyInput
      | agency_ownerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | agency_ownerUpdateManyWithWhereWithoutCompanyInput
      | agency_ownerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: agency_ownerScalarWhereInput | agency_ownerScalarWhereInput[];
  };

  export type agency_ownerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<agency_ownerCreateWithoutCompanyInput, agency_ownerUncheckedCreateWithoutCompanyInput>
      | agency_ownerCreateWithoutCompanyInput[]
      | agency_ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutCompanyInput | agency_ownerCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | agency_ownerUpsertWithWhereUniqueWithoutCompanyInput
      | agency_ownerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: agency_ownerCreateManyCompanyInputEnvelope;
    set?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    disconnect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    delete?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    update?:
      | agency_ownerUpdateWithWhereUniqueWithoutCompanyInput
      | agency_ownerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | agency_ownerUpdateManyWithWhereWithoutCompanyInput
      | agency_ownerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: agency_ownerScalarWhereInput | agency_ownerScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutFreelancerInput = {
    create?: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
    connectOrCreate?: userCreateOrConnectWithoutFreelancerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutFreelancerNestedInput = {
    create?: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
    connectOrCreate?: userCreateOrConnectWithoutFreelancerInput;
    upsert?: userUpsertWithoutFreelancerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFreelancerInput, userUpdateWithoutFreelancerInput>,
      userUncheckedUpdateWithoutFreelancerInput
    >;
  };

  export type agency_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<agency_memberCreateWithoutUserInput, agency_memberUncheckedCreateWithoutUserInput>
      | agency_memberCreateWithoutUserInput[]
      | agency_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_memberCreateOrConnectWithoutUserInput | agency_memberCreateOrConnectWithoutUserInput[];
    createMany?: agency_memberCreateManyUserInputEnvelope;
    connect?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
  };

  export type agency_ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<agency_ownerCreateWithoutUserInput, agency_ownerUncheckedCreateWithoutUserInput>
      | agency_ownerCreateWithoutUserInput[]
      | agency_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutUserInput | agency_ownerCreateOrConnectWithoutUserInput[];
    createMany?: agency_ownerCreateManyUserInputEnvelope;
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
  };

  export type client_nameCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<client_nameCreateWithoutUserInput, client_nameUncheckedCreateWithoutUserInput>
      | client_nameCreateWithoutUserInput[]
      | client_nameUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_nameCreateOrConnectWithoutUserInput | client_nameCreateOrConnectWithoutUserInput[];
    createMany?: client_nameCreateManyUserInputEnvelope;
    connect?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
  };

  export type freelancerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
  };

  export type agency_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<agency_memberCreateWithoutUserInput, agency_memberUncheckedCreateWithoutUserInput>
      | agency_memberCreateWithoutUserInput[]
      | agency_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_memberCreateOrConnectWithoutUserInput | agency_memberCreateOrConnectWithoutUserInput[];
    createMany?: agency_memberCreateManyUserInputEnvelope;
    connect?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
  };

  export type agency_ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<agency_ownerCreateWithoutUserInput, agency_ownerUncheckedCreateWithoutUserInput>
      | agency_ownerCreateWithoutUserInput[]
      | agency_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutUserInput | agency_ownerCreateOrConnectWithoutUserInput[];
    createMany?: agency_ownerCreateManyUserInputEnvelope;
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
  };

  export type client_nameUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<client_nameCreateWithoutUserInput, client_nameUncheckedCreateWithoutUserInput>
      | client_nameCreateWithoutUserInput[]
      | client_nameUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_nameCreateOrConnectWithoutUserInput | client_nameCreateOrConnectWithoutUserInput[];
    createMany?: client_nameCreateManyUserInputEnvelope;
    connect?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
  };

  export type freelancerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
  };

  export type agency_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<agency_memberCreateWithoutUserInput, agency_memberUncheckedCreateWithoutUserInput>
      | agency_memberCreateWithoutUserInput[]
      | agency_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_memberCreateOrConnectWithoutUserInput | agency_memberCreateOrConnectWithoutUserInput[];
    upsert?: agency_memberUpsertWithWhereUniqueWithoutUserInput | agency_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: agency_memberCreateManyUserInputEnvelope;
    set?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    disconnect?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    delete?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    connect?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    update?: agency_memberUpdateWithWhereUniqueWithoutUserInput | agency_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: agency_memberUpdateManyWithWhereWithoutUserInput | agency_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: agency_memberScalarWhereInput | agency_memberScalarWhereInput[];
  };

  export type agency_ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<agency_ownerCreateWithoutUserInput, agency_ownerUncheckedCreateWithoutUserInput>
      | agency_ownerCreateWithoutUserInput[]
      | agency_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutUserInput | agency_ownerCreateOrConnectWithoutUserInput[];
    upsert?: agency_ownerUpsertWithWhereUniqueWithoutUserInput | agency_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: agency_ownerCreateManyUserInputEnvelope;
    set?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    disconnect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    delete?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    update?: agency_ownerUpdateWithWhereUniqueWithoutUserInput | agency_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: agency_ownerUpdateManyWithWhereWithoutUserInput | agency_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: agency_ownerScalarWhereInput | agency_ownerScalarWhereInput[];
  };

  export type client_nameUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<client_nameCreateWithoutUserInput, client_nameUncheckedCreateWithoutUserInput>
      | client_nameCreateWithoutUserInput[]
      | client_nameUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_nameCreateOrConnectWithoutUserInput | client_nameCreateOrConnectWithoutUserInput[];
    upsert?: client_nameUpsertWithWhereUniqueWithoutUserInput | client_nameUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: client_nameCreateManyUserInputEnvelope;
    set?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    disconnect?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    delete?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    connect?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    update?: client_nameUpdateWithWhereUniqueWithoutUserInput | client_nameUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: client_nameUpdateManyWithWhereWithoutUserInput | client_nameUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: client_nameScalarWhereInput | client_nameScalarWhereInput[];
  };

  export type freelancerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    upsert?: freelancerUpsertWithWhereUniqueWithoutUserInput | freelancerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    set?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    disconnect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    delete?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    update?: freelancerUpdateWithWhereUniqueWithoutUserInput | freelancerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: freelancerUpdateManyWithWhereWithoutUserInput | freelancerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
  };

  export type agency_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<agency_memberCreateWithoutUserInput, agency_memberUncheckedCreateWithoutUserInput>
      | agency_memberCreateWithoutUserInput[]
      | agency_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_memberCreateOrConnectWithoutUserInput | agency_memberCreateOrConnectWithoutUserInput[];
    upsert?: agency_memberUpsertWithWhereUniqueWithoutUserInput | agency_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: agency_memberCreateManyUserInputEnvelope;
    set?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    disconnect?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    delete?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    connect?: agency_memberWhereUniqueInput | agency_memberWhereUniqueInput[];
    update?: agency_memberUpdateWithWhereUniqueWithoutUserInput | agency_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: agency_memberUpdateManyWithWhereWithoutUserInput | agency_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: agency_memberScalarWhereInput | agency_memberScalarWhereInput[];
  };

  export type agency_ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<agency_ownerCreateWithoutUserInput, agency_ownerUncheckedCreateWithoutUserInput>
      | agency_ownerCreateWithoutUserInput[]
      | agency_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: agency_ownerCreateOrConnectWithoutUserInput | agency_ownerCreateOrConnectWithoutUserInput[];
    upsert?: agency_ownerUpsertWithWhereUniqueWithoutUserInput | agency_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: agency_ownerCreateManyUserInputEnvelope;
    set?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    disconnect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    delete?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    connect?: agency_ownerWhereUniqueInput | agency_ownerWhereUniqueInput[];
    update?: agency_ownerUpdateWithWhereUniqueWithoutUserInput | agency_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: agency_ownerUpdateManyWithWhereWithoutUserInput | agency_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: agency_ownerScalarWhereInput | agency_ownerScalarWhereInput[];
  };

  export type client_nameUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<client_nameCreateWithoutUserInput, client_nameUncheckedCreateWithoutUserInput>
      | client_nameCreateWithoutUserInput[]
      | client_nameUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_nameCreateOrConnectWithoutUserInput | client_nameCreateOrConnectWithoutUserInput[];
    upsert?: client_nameUpsertWithWhereUniqueWithoutUserInput | client_nameUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: client_nameCreateManyUserInputEnvelope;
    set?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    disconnect?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    delete?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    connect?: client_nameWhereUniqueInput | client_nameWhereUniqueInput[];
    update?: client_nameUpdateWithWhereUniqueWithoutUserInput | client_nameUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: client_nameUpdateManyWithWhereWithoutUserInput | client_nameUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: client_nameScalarWhereInput | client_nameScalarWhereInput[];
  };

  export type freelancerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    upsert?: freelancerUpsertWithWhereUniqueWithoutUserInput | freelancerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    set?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    disconnect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    delete?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    update?: freelancerUpdateWithWhereUniqueWithoutUserInput | freelancerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: freelancerUpdateManyWithWhereWithoutUserInput | freelancerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type userCreateWithoutAgency_memberInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_owner?: agency_ownerCreateNestedManyWithoutUserInput;
    client_name?: client_nameCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAgency_memberInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_owner?: agency_ownerUncheckedCreateNestedManyWithoutUserInput;
    client_name?: client_nameUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAgency_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAgency_memberInput, userUncheckedCreateWithoutAgency_memberInput>;
  };

  export type userUpsertWithoutAgency_memberInput = {
    update: XOR<userUpdateWithoutAgency_memberInput, userUncheckedUpdateWithoutAgency_memberInput>;
    create: XOR<userCreateWithoutAgency_memberInput, userUncheckedCreateWithoutAgency_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAgency_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAgency_memberInput, userUncheckedUpdateWithoutAgency_memberInput>;
  };

  export type userUpdateWithoutAgency_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_owner?: agency_ownerUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAgency_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_owner?: agency_ownerUncheckedUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutAgency_ownerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutAgency_ownerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutAgency_ownerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutAgency_ownerInput, companyUncheckedCreateWithoutAgency_ownerInput>;
  };

  export type userCreateWithoutAgency_ownerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberCreateNestedManyWithoutUserInput;
    client_name?: client_nameCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAgency_ownerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberUncheckedCreateNestedManyWithoutUserInput;
    client_name?: client_nameUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAgency_ownerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAgency_ownerInput, userUncheckedCreateWithoutAgency_ownerInput>;
  };

  export type companyUpsertWithoutAgency_ownerInput = {
    update: XOR<companyUpdateWithoutAgency_ownerInput, companyUncheckedUpdateWithoutAgency_ownerInput>;
    create: XOR<companyCreateWithoutAgency_ownerInput, companyUncheckedCreateWithoutAgency_ownerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutAgency_ownerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutAgency_ownerInput, companyUncheckedUpdateWithoutAgency_ownerInput>;
  };

  export type companyUpdateWithoutAgency_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutAgency_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutAgency_ownerInput = {
    update: XOR<userUpdateWithoutAgency_ownerInput, userUncheckedUpdateWithoutAgency_ownerInput>;
    create: XOR<userCreateWithoutAgency_ownerInput, userUncheckedCreateWithoutAgency_ownerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAgency_ownerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAgency_ownerInput, userUncheckedUpdateWithoutAgency_ownerInput>;
  };

  export type userUpdateWithoutAgency_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAgency_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUncheckedUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutClient_nameInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberCreateNestedManyWithoutUserInput;
    agency_owner?: agency_ownerCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClient_nameInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberUncheckedCreateNestedManyWithoutUserInput;
    agency_owner?: agency_ownerUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClient_nameInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClient_nameInput, userUncheckedCreateWithoutClient_nameInput>;
  };

  export type userUpsertWithoutClient_nameInput = {
    update: XOR<userUpdateWithoutClient_nameInput, userUncheckedUpdateWithoutClient_nameInput>;
    create: XOR<userCreateWithoutClient_nameInput, userUncheckedCreateWithoutClient_nameInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClient_nameInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClient_nameInput, userUncheckedUpdateWithoutClient_nameInput>;
  };

  export type userUpdateWithoutClient_nameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUpdateManyWithoutUserNestedInput;
    agency_owner?: agency_ownerUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClient_nameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUncheckedUpdateManyWithoutUserNestedInput;
    agency_owner?: agency_ownerUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type agency_ownerCreateWithoutCompanyInput = {
    id?: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAgency_ownerInput;
  };

  export type agency_ownerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_ownerCreateOrConnectWithoutCompanyInput = {
    where: agency_ownerWhereUniqueInput;
    create: XOR<agency_ownerCreateWithoutCompanyInput, agency_ownerUncheckedCreateWithoutCompanyInput>;
  };

  export type agency_ownerCreateManyCompanyInputEnvelope = {
    data: agency_ownerCreateManyCompanyInput | agency_ownerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type agency_ownerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: agency_ownerWhereUniqueInput;
    update: XOR<agency_ownerUpdateWithoutCompanyInput, agency_ownerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<agency_ownerCreateWithoutCompanyInput, agency_ownerUncheckedCreateWithoutCompanyInput>;
  };

  export type agency_ownerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: agency_ownerWhereUniqueInput;
    data: XOR<agency_ownerUpdateWithoutCompanyInput, agency_ownerUncheckedUpdateWithoutCompanyInput>;
  };

  export type agency_ownerUpdateManyWithWhereWithoutCompanyInput = {
    where: agency_ownerScalarWhereInput;
    data: XOR<agency_ownerUpdateManyMutationInput, agency_ownerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type agency_ownerScalarWhereInput = {
    AND?: agency_ownerScalarWhereInput | agency_ownerScalarWhereInput[];
    OR?: agency_ownerScalarWhereInput[];
    NOT?: agency_ownerScalarWhereInput | agency_ownerScalarWhereInput[];
    id?: UuidFilter<'agency_owner'> | string;
    company_id?: UuidFilter<'agency_owner'> | string;
    joining_date?: DateTimeNullableFilter<'agency_owner'> | Date | string | null;
    leaving_date?: DateTimeNullableFilter<'agency_owner'> | Date | string | null;
    user_id?: UuidFilter<'agency_owner'> | string;
    created_at?: DateTimeFilter<'agency_owner'> | Date | string;
    updated_at?: DateTimeFilter<'agency_owner'> | Date | string;
  };

  export type userCreateWithoutFreelancerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberCreateNestedManyWithoutUserInput;
    agency_owner?: agency_ownerCreateNestedManyWithoutUserInput;
    client_name?: client_nameCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    agency_member?: agency_memberUncheckedCreateNestedManyWithoutUserInput;
    agency_owner?: agency_ownerUncheckedCreateNestedManyWithoutUserInput;
    client_name?: client_nameUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFreelancerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
  };

  export type userUpsertWithoutFreelancerInput = {
    update: XOR<userUpdateWithoutFreelancerInput, userUncheckedUpdateWithoutFreelancerInput>;
    create: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFreelancerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFreelancerInput, userUncheckedUpdateWithoutFreelancerInput>;
  };

  export type userUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUpdateManyWithoutUserNestedInput;
    agency_owner?: agency_ownerUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agency_member?: agency_memberUncheckedUpdateManyWithoutUserNestedInput;
    agency_owner?: agency_ownerUncheckedUpdateManyWithoutUserNestedInput;
    client_name?: client_nameUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type agency_memberCreateWithoutUserInput = {
    id?: string;
    role?: string | null;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    role?: string | null;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_memberCreateOrConnectWithoutUserInput = {
    where: agency_memberWhereUniqueInput;
    create: XOR<agency_memberCreateWithoutUserInput, agency_memberUncheckedCreateWithoutUserInput>;
  };

  export type agency_memberCreateManyUserInputEnvelope = {
    data: agency_memberCreateManyUserInput | agency_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type agency_ownerCreateWithoutUserInput = {
    id?: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAgency_ownerInput;
  };

  export type agency_ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    company_id: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_ownerCreateOrConnectWithoutUserInput = {
    where: agency_ownerWhereUniqueInput;
    create: XOR<agency_ownerCreateWithoutUserInput, agency_ownerUncheckedCreateWithoutUserInput>;
  };

  export type agency_ownerCreateManyUserInputEnvelope = {
    data: agency_ownerCreateManyUserInput | agency_ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type client_nameCreateWithoutUserInput = {
    id?: string;
    company_name?: string | null;
    project_description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_nameUncheckedCreateWithoutUserInput = {
    id?: string;
    company_name?: string | null;
    project_description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_nameCreateOrConnectWithoutUserInput = {
    where: client_nameWhereUniqueInput;
    create: XOR<client_nameCreateWithoutUserInput, client_nameUncheckedCreateWithoutUserInput>;
  };

  export type client_nameCreateManyUserInputEnvelope = {
    data: client_nameCreateManyUserInput | client_nameCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type freelancerCreateWithoutUserInput = {
    id?: string;
    skills?: string | null;
    experience?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelancerUncheckedCreateWithoutUserInput = {
    id?: string;
    skills?: string | null;
    experience?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelancerCreateOrConnectWithoutUserInput = {
    where: freelancerWhereUniqueInput;
    create: XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>;
  };

  export type freelancerCreateManyUserInputEnvelope = {
    data: freelancerCreateManyUserInput | freelancerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type agency_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: agency_memberWhereUniqueInput;
    update: XOR<agency_memberUpdateWithoutUserInput, agency_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<agency_memberCreateWithoutUserInput, agency_memberUncheckedCreateWithoutUserInput>;
  };

  export type agency_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: agency_memberWhereUniqueInput;
    data: XOR<agency_memberUpdateWithoutUserInput, agency_memberUncheckedUpdateWithoutUserInput>;
  };

  export type agency_memberUpdateManyWithWhereWithoutUserInput = {
    where: agency_memberScalarWhereInput;
    data: XOR<agency_memberUpdateManyMutationInput, agency_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type agency_memberScalarWhereInput = {
    AND?: agency_memberScalarWhereInput | agency_memberScalarWhereInput[];
    OR?: agency_memberScalarWhereInput[];
    NOT?: agency_memberScalarWhereInput | agency_memberScalarWhereInput[];
    id?: UuidFilter<'agency_member'> | string;
    role?: StringNullableFilter<'agency_member'> | string | null;
    joining_date?: DateTimeNullableFilter<'agency_member'> | Date | string | null;
    leaving_date?: DateTimeNullableFilter<'agency_member'> | Date | string | null;
    user_id?: UuidFilter<'agency_member'> | string;
    created_at?: DateTimeFilter<'agency_member'> | Date | string;
    updated_at?: DateTimeFilter<'agency_member'> | Date | string;
  };

  export type agency_ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: agency_ownerWhereUniqueInput;
    update: XOR<agency_ownerUpdateWithoutUserInput, agency_ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<agency_ownerCreateWithoutUserInput, agency_ownerUncheckedCreateWithoutUserInput>;
  };

  export type agency_ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: agency_ownerWhereUniqueInput;
    data: XOR<agency_ownerUpdateWithoutUserInput, agency_ownerUncheckedUpdateWithoutUserInput>;
  };

  export type agency_ownerUpdateManyWithWhereWithoutUserInput = {
    where: agency_ownerScalarWhereInput;
    data: XOR<agency_ownerUpdateManyMutationInput, agency_ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type client_nameUpsertWithWhereUniqueWithoutUserInput = {
    where: client_nameWhereUniqueInput;
    update: XOR<client_nameUpdateWithoutUserInput, client_nameUncheckedUpdateWithoutUserInput>;
    create: XOR<client_nameCreateWithoutUserInput, client_nameUncheckedCreateWithoutUserInput>;
  };

  export type client_nameUpdateWithWhereUniqueWithoutUserInput = {
    where: client_nameWhereUniqueInput;
    data: XOR<client_nameUpdateWithoutUserInput, client_nameUncheckedUpdateWithoutUserInput>;
  };

  export type client_nameUpdateManyWithWhereWithoutUserInput = {
    where: client_nameScalarWhereInput;
    data: XOR<client_nameUpdateManyMutationInput, client_nameUncheckedUpdateManyWithoutUserInput>;
  };

  export type client_nameScalarWhereInput = {
    AND?: client_nameScalarWhereInput | client_nameScalarWhereInput[];
    OR?: client_nameScalarWhereInput[];
    NOT?: client_nameScalarWhereInput | client_nameScalarWhereInput[];
    id?: UuidFilter<'client_name'> | string;
    company_name?: StringNullableFilter<'client_name'> | string | null;
    project_description?: StringNullableFilter<'client_name'> | string | null;
    budget?: IntNullableFilter<'client_name'> | number | null;
    deadline?: DateTimeNullableFilter<'client_name'> | Date | string | null;
    user_id?: UuidFilter<'client_name'> | string;
    created_at?: DateTimeFilter<'client_name'> | Date | string;
    updated_at?: DateTimeFilter<'client_name'> | Date | string;
  };

  export type freelancerUpsertWithWhereUniqueWithoutUserInput = {
    where: freelancerWhereUniqueInput;
    update: XOR<freelancerUpdateWithoutUserInput, freelancerUncheckedUpdateWithoutUserInput>;
    create: XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>;
  };

  export type freelancerUpdateWithWhereUniqueWithoutUserInput = {
    where: freelancerWhereUniqueInput;
    data: XOR<freelancerUpdateWithoutUserInput, freelancerUncheckedUpdateWithoutUserInput>;
  };

  export type freelancerUpdateManyWithWhereWithoutUserInput = {
    where: freelancerScalarWhereInput;
    data: XOR<freelancerUpdateManyMutationInput, freelancerUncheckedUpdateManyWithoutUserInput>;
  };

  export type freelancerScalarWhereInput = {
    AND?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
    OR?: freelancerScalarWhereInput[];
    NOT?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
    id?: UuidFilter<'freelancer'> | string;
    skills?: StringNullableFilter<'freelancer'> | string | null;
    experience?: StringNullableFilter<'freelancer'> | string | null;
    hourly_rate?: IntNullableFilter<'freelancer'> | number | null;
    availability?: StringNullableFilter<'freelancer'> | string | null;
    user_id?: UuidFilter<'freelancer'> | string;
    created_at?: DateTimeFilter<'freelancer'> | Date | string;
    updated_at?: DateTimeFilter<'freelancer'> | Date | string;
  };

  export type agency_ownerCreateManyCompanyInput = {
    id?: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_ownerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAgency_ownerNestedInput;
  };

  export type agency_ownerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_ownerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_memberCreateManyUserInput = {
    id?: string;
    role?: string | null;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_ownerCreateManyUserInput = {
    id?: string;
    company_id: string;
    joining_date?: Date | string | null;
    leaving_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_nameCreateManyUserInput = {
    id?: string;
    company_name?: string | null;
    project_description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelancerCreateManyUserInput = {
    id?: string;
    skills?: string | null;
    experience?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agency_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAgency_ownerNestedInput;
  };

  export type agency_ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agency_ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_nameUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_nameUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_nameUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: NullableStringFieldUpdateOperationsInput | string | null;
    project_description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelancerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelancerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelancerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use agency_memberDefaultArgs instead
   */
  export type agency_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    agency_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use agency_ownerDefaultArgs instead
   */
  export type agency_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    agency_ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use client_nameDefaultArgs instead
   */
  export type client_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    client_nameDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use freelancerDefaultArgs instead
   */
  export type freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    freelancerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
