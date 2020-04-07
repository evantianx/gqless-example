// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  EnumNode
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get query() {
          return new FieldNode(schema.Query, undefined, true);
        },
        get pokemons() {
          return new FieldNode(
            new ArrayNode(schema.Pokemon, true),
            new Arguments(
              {
                get first() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        },
        get pokemon() {
          return new FieldNode(
            schema.Pokemon,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, true);
              },
              get name() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get Pokemon() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get number() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get weight() {
          return new FieldNode(schema.PokemonDimension, undefined, true);
        },
        get height() {
          return new FieldNode(schema.PokemonDimension, undefined, true);
        },
        get classification() {
          return new FieldNode(schema.String, undefined, true);
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get resistant() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get attacks() {
          return new FieldNode(schema.PokemonAttack, undefined, true);
        },
        get weaknesses() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get fleeRate() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get maxCP() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get evolutions() {
          return new FieldNode(
            new ArrayNode(schema.Pokemon, true),
            undefined,
            true
          );
        },
        get evolutionRequirements() {
          return new FieldNode(
            schema.PokemonEvolutionRequirement,
            undefined,
            true
          );
        },
        get maxHP() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get image() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Pokemon", extension: ((extensions as any) || {}).Pokemon }
    );
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get PokemonDimension() {
    return new ObjectNode(
      {
        get minimum() {
          return new FieldNode(schema.String, undefined, true);
        },
        get maximum() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "PokemonDimension",
        extension: ((extensions as any) || {}).PokemonDimension
      }
    );
  },
  get PokemonAttack() {
    return new ObjectNode(
      {
        get fast() {
          return new FieldNode(
            new ArrayNode(schema.Attack, true),
            undefined,
            true
          );
        },
        get special() {
          return new FieldNode(
            new ArrayNode(schema.Attack, true),
            undefined,
            true
          );
        }
      },
      {
        name: "PokemonAttack",
        extension: ((extensions as any) || {}).PokemonAttack
      }
    );
  },
  get Attack() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get damage() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Attack", extension: ((extensions as any) || {}).Attack }
    );
  },
  get Float() {
    return new ScalarNode({
      name: "Float",
      extension: ((extensions as any) || {}).Float
    });
  },
  get PokemonEvolutionRequirement() {
    return new ObjectNode(
      {
        get amount() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "PokemonEvolutionRequirement",
        extension: ((extensions as any) || {}).PokemonEvolutionRequirement
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get onOperation() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get onFragment() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get onField() {
          return new FieldNode(schema.Boolean, undefined, false);
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  }
};

lazyGetters(schema);
