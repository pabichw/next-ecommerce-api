import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 31, end: 33 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 35, end: 37 },
                  },
                  loc: { start: 35, end: 37 },
                },
                loc: { start: 35, end: 38 },
              },
              directives: [],
              loc: { start: 31, end: 38 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 41, end: 49 },
            },
            loc: { start: 41, end: 49 },
          },
          directives: [],
          loc: { start: 22, end: 49 },
        },
      ],
      loc: { start: 0, end: 51 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 58, end: 66 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 71, end: 73 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 75, end: 77 } },
              loc: { start: 75, end: 77 },
            },
            loc: { start: 75, end: 78 },
          },
          directives: [],
          loc: { start: 71, end: 78 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 81, end: 85 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 87, end: 93 },
              },
              loc: { start: 87, end: 93 },
            },
            loc: { start: 87, end: 94 },
          },
          directives: [],
          loc: { start: 81, end: 94 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 97, end: 101 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 103, end: 109 },
              },
              loc: { start: 103, end: 109 },
            },
            loc: { start: 103, end: 110 },
          },
          directives: [],
          loc: { start: 97, end: 110 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 113, end: 121 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 124, end: 131 },
                  },
                  loc: { start: 124, end: 131 },
                },
                loc: { start: 124, end: 132 },
              },
              loc: { start: 123, end: 133 },
            },
            loc: { start: 123, end: 134 },
          },
          directives: [],
          loc: { start: 113, end: 134 },
        },
      ],
      loc: { start: 53, end: 136 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 149, end: 154 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 159, end: 169 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 170, end: 172 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 174, end: 176 },
                  },
                  loc: { start: 174, end: 176 },
                },
                loc: { start: 174, end: 177 },
              },
              directives: [],
              loc: { start: 170, end: 177 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 180, end: 190 },
            },
            loc: { start: 180, end: 190 },
          },
          directives: [],
          loc: { start: 159, end: 190 },
        },
      ],
      loc: { start: 137, end: 192 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 199, end: 209 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 214, end: 216 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 218, end: 220 },
              },
              loc: { start: 218, end: 220 },
            },
            loc: { start: 218, end: 221 },
          },
          directives: [],
          loc: { start: 214, end: 221 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 224, end: 228 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 230, end: 236 },
              },
              loc: { start: 230, end: 236 },
            },
            loc: { start: 230, end: 237 },
          },
          directives: [],
          loc: { start: 224, end: 237 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 240, end: 248 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 251, end: 258 },
                  },
                  loc: { start: 251, end: 258 },
                },
                loc: { start: 251, end: 259 },
              },
              loc: { start: 250, end: 260 },
            },
            loc: { start: 250, end: 261 },
          },
          directives: [],
          loc: { start: 240, end: 261 },
        },
      ],
      loc: { start: 194, end: 263 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 276, end: 281 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 286, end: 293 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 294, end: 296 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 298, end: 300 },
                  },
                  loc: { start: 298, end: 300 },
                },
                loc: { start: 298, end: 301 },
              },
              directives: [],
              loc: { start: 294, end: 301 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 304, end: 311 },
            },
            loc: { start: 304, end: 311 },
          },
          directives: [],
          loc: { start: 286, end: 311 },
        },
      ],
      loc: { start: 264, end: 313 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 320, end: 327 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 332, end: 334 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 336, end: 338 },
              },
              loc: { start: 336, end: 338 },
            },
            loc: { start: 336, end: 339 },
          },
          directives: [],
          loc: { start: 332, end: 339 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 342, end: 346 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 348, end: 354 },
              },
              loc: { start: 348, end: 354 },
            },
            loc: { start: 348, end: 355 },
          },
          directives: [],
          loc: { start: 342, end: 355 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 358, end: 362 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 364, end: 370 },
              },
              loc: { start: 364, end: 370 },
            },
            loc: { start: 364, end: 371 },
          },
          directives: [],
          loc: { start: 358, end: 371 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 374, end: 385 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 387, end: 393 },
              },
              loc: { start: 387, end: 393 },
            },
            loc: { start: 387, end: 394 },
          },
          directives: [],
          loc: { start: 374, end: 394 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 397, end: 402 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 404, end: 407 },
              },
              loc: { start: 404, end: 407 },
            },
            loc: { start: 404, end: 408 },
          },
          directives: [],
          loc: { start: 397, end: 408 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 411, end: 421 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 424, end: 432 },
                  },
                  loc: { start: 424, end: 432 },
                },
                loc: { start: 424, end: 433 },
              },
              loc: { start: 423, end: 434 },
            },
            loc: { start: 423, end: 435 },
          },
          directives: [],
          loc: { start: 411, end: 435 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 438, end: 449 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Collection",
                    loc: { start: 452, end: 462 },
                  },
                  loc: { start: 452, end: 462 },
                },
                loc: { start: 452, end: 463 },
              },
              loc: { start: 451, end: 464 },
            },
            loc: { start: 451, end: 465 },
          },
          directives: [],
          loc: { start: 438, end: 465 },
        },
      ],
      loc: { start: 315, end: 467 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 473, end: 478 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 468, end: 478 },
    },
  ],
  loc: { start: 0, end: 479 },
} as unknown as DocumentNode;
