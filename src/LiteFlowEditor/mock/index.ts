import { ConditionTypeEnum, NodeTypeEnum } from '../constant';

export default {
  // 串行编排(THEN)
  THEN: {
    "type": "THEN",
    "children": [
      {
        "type": "IF",
        "condition": {
          "type": "NodeIfComponent",
          "id": "BlackListState",
          "properties": {},
          "position": {
            "x": 130,
            "y": 330
          },
          "ids": "426680d9-8510-4fe7-a06a-0b3c11827b00"
        },
        "children": [
          {
            "type": "NodeComponent",
            "id": "BlaskListLogger",
            "properties": {},
            "position": {
              "x": 220,
              "y": 40
            },
            "ids": "999c1c87-0c1f-4fac-bccb-71d76a84387e"
          },
          {
            "type": "IF",
            "condition": {
              "type": "NodeIfComponent",
              "id": "RiskCheck",
              "properties": {},
              "position": {
                "x": 220,
                "y": 375
              },
              "ids": "4ad79feb-cefa-4a2d-bf75-a22bcb2f274b"
            },
            "children": [
              {
                "type": "NodeComponent",
                "id": "RiskLogger",
                "properties": {},
                "position": {
                  "x": 310,
                  "y": 112.5
                },
                "ids": "06922c17-acbc-4b9e-a1a4-46a46f414bd8"
              },
              {
                "type": "IF",
                "condition": {
                  "type": "NodeIfComponent",
                  "id": "RiskCheckAndCount",
                  "properties": {},
                  "position": {
                    "x": 310,
                    "y": 420
                  },
                  "ids": "098c1116-543b-4b4f-8c79-0034b85eed17"
                },
                "children": [
                  {
                    "type": "THEN",
                    "children": [
                      {
                        "type": "NodeComponent",
                        "id": "NewRiskLogger",
                        "properties": {},
                        "position": {
                          "x": 400,
                          "y": 185
                        },
                        "ids": "16ac028b-c5e5-49fc-83d9-3a8c4efa2f75"
                      },
                      {
                        "type": "NodeComponent",
                        "id": "AskLogger",
                        "properties": {},
                        "position": {
                          "x": 490,
                          "y": 185
                        },
                        "ids": "beadf817-2003-4091-a0ba-85ab43c9bd3f"
                      }
                    ]
                  },
                  {
                    "type": "IF",
                    "condition": {
                      "type": "NodeIfComponent",
                      "id": "isEmptyQuestion",
                      "properties": {},
                      "position": {
                        "x": 400,
                        "y": 465
                      },
                      "ids": "d8092345-cab7-4852-a81d-4ad3b6435bad"
                    },
                    "children": [
                      {
                        "type": "NodeComponent",
                        "id": "EndAndLog",
                        "properties": {},
                        "position": {
                          "x": 490,
                          "y": 275
                        },
                        "ids": "b59c7d5a-88e7-4a00-86a4-afaa1996d1af"
                      },
                      {
                        "type": "THEN",
                        "children": [
                          {
                            "type": "NodeComponent",
                            "id": "reWrite",
                            "properties": {},
                            "position": {
                              "x": 490,
                              "y": 492.5
                            },
                            "ids": "cb76d6de-97d6-4468-af02-b9b0986a3a01"
                          },
                          {
                            "type": "NodeComponent",
                            "id": "matchRegion",
                            "properties": {},
                            "position": {
                              "x": 580,
                              "y": 492.5
                            },
                            "ids": "8a52b2c4-45c9-4006-ae70-c9f3a370c16a"
                          },
                          {
                            "type": "NodeComponent",
                            "id": "chineseByPatternMatch",
                            "properties": {},
                            "position": {
                              "x": 670,
                              "y": 492.5
                            },
                            "ids": "c741a6e8-2dfc-4a55-a0cf-08f3c14c0226"
                          },
                          {
                            "type": "WHEN",
                            "children": [
                              {
                                "type": "THEN",
                                "children": [
                                  {
                                    "type": "NodeComponent",
                                    "id": "leaderIdScene",
                                    "properties": {},
                                    "position": {
                                      "x": 850,
                                      "y": 330
                                    },
                                    "ids": "c5a6dacb-41f0-4054-a237-2299023a026f"
                                  },
                                  {
                                    "type": "THEN",
                                    "children": [
                                      {
                                        "type": "NodeComponent",
                                        "id": "leaderScene",
                                        "properties": {},
                                        "position": {
                                          "x": 940,
                                          "y": 330
                                        },
                                        "ids": "a0a5f1c0-1a68-46a6-a120-b1ceed16e297"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "organScene",
                                        "properties": {},
                                        "position": {
                                          "x": 1030,
                                          "y": 330
                                        },
                                        "ids": "190eb6c9-6c78-4c7b-af86-b17d24be6c40"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "govDataScene",
                                        "properties": {},
                                        "position": {
                                          "x": 1120,
                                          "y": 330
                                        },
                                        "ids": "cc239208-9364-484b-94b8-54b9a698fa98"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "videoScene",
                                        "properties": {},
                                        "position": {
                                          "x": 1210,
                                          "y": 330
                                        },
                                        "ids": "9cd748f9-0e80-48e4-af4f-1395ab505d26"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "vrScene",
                                        "properties": {},
                                        "position": {
                                          "x": 1300,
                                          "y": 330
                                        },
                                        "ids": "d2187915-3b6e-423c-8d9d-d6e20e318413"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "entryExitIntent",
                                        "properties": {},
                                        "position": {
                                          "x": 1390,
                                          "y": 330
                                        },
                                        "ids": "2b3d2f27-90c8-444d-81a7-78c960f11e1e"
                                      },
                                      {
                                        "type": "THEN",
                                        "children": [
                                          {
                                            "type": "NodeComponent",
                                            "id": "hotService",
                                            "properties": {},
                                            "position": {
                                              "x": 1480,
                                              "y": 330
                                            },
                                            "ids": "de274033-485a-4570-b6ef-b81d6819ba1a"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "NodeComponent",
                                "id": "LLMLanguageChecker",
                                "properties": {},
                                "position": {
                                  "x": 850,
                                  "y": 537.5
                                },
                                "ids": "4906028c-4348-4764-a0ec-2530cda33cb9"
                              }
                            ],
                            "properties": {
                              "any": false
                            },
                            "position": {
                              "x": 760,
                              "y": 492.5
                            },
                            "ids": "a901e758-2ad6-4bfd-b308-9e06f8894841"
                          },
                          {
                            "type": "WHEN",
                            "children": [
                              {
                                "type": "THEN",
                                "children": [
                                  {
                                    "type": "IF",
                                    "condition": {
                                      "type": "NodeIfComponent",
                                      "id": "isChineseLanguageCheck",
                                      "properties": {},
                                      "position": {
                                        "x": 1750,
                                        "y": 420
                                      },
                                      "ids": "f63285f3-9b3a-4d6f-b98f-8a2ba47b2105"
                                    },
                                    "children": [
                                      {
                                        "type": "NodeComponent",
                                        "id": "cache",
                                        "properties": {},
                                        "position": {
                                          "x": 1840,
                                          "y": 330
                                        },
                                        "ids": "1e834a50-ae59-421e-b337-3718460038f1"
                                      }
                                    ],
                                    "position": {
                                      "x": 1930,
                                      "y": 420
                                    },
                                    "ids": "17403f31-520d-4880-9b7b-4b11d0b681a8"
                                  },
                                  {
                                    "type": "NodeComponent",
                                    "id": "qaPairs",
                                    "properties": {},
                                    "position": {
                                      "x": 2020,
                                      "y": 420
                                    },
                                    "ids": "50197876-0386-4273-9be3-e765376d51e3"
                                  },
                                  {
                                    "type": "IF",
                                    "condition": {
                                      "type": "NodeIfComponent",
                                      "id": "isQaHitCheck",
                                      "properties": {},
                                      "position": {
                                        "x": 2110,
                                        "y": 420
                                      },
                                      "ids": "92bbb678-63b4-4cf3-b983-f51dfdf3d280"
                                    },
                                    "children": [
                                      {
                                        "type": "THEN",
                                        "children": [
                                          {
                                            "type": "NodeComponent",
                                            "id": "qaAnswer",
                                            "properties": {},
                                            "position": {
                                              "x": 2200,
                                              "y": 330
                                            },
                                            "ids": "b17e6bed-2654-4bf5-a5bc-443898441709"
                                          },
                                          {
                                            "type": "NodeComponent",
                                            "id": "endCmp",
                                            "properties": {},
                                            "position": {
                                              "x": 2290,
                                              "y": 330
                                            },
                                            "ids": "bca6aff2-50bb-4d45-8327-9a63d11a3537"
                                          }
                                        ]
                                      }
                                    ],
                                    "position": {
                                      "x": 2380,
                                      "y": 420
                                    },
                                    "ids": "192faf70-6c1f-457a-b760-dd94089c1360"
                                  },
                                  {
                                    "type": "SWITCH",
                                    "condition": {
                                      "type": "NodeSwitchComponent",
                                      "id": "oneThing",
                                      "properties": {},
                                      "position": {
                                        "x": 2470,
                                        "y": 420
                                      },
                                      "ids": "01dc92ee-5645-4fed-958a-0be8614dcf81"
                                    },
                                    "children": [
                                      {
                                        "type": "NodeComponent",
                                        "id": "llmChat",
                                        "properties": {
                                          "tag": "onethingOut"
                                        },
                                        "position": {
                                          "x": 2560,
                                          "y": 330
                                        },
                                        "ids": "e6798a1e-6390-4b0d-a34f-4ea06e392a87"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "endCmp",
                                        "properties": {
                                          "data": "end"
                                        },
                                        "position": {
                                          "x": 2560,
                                          "y": 420
                                        },
                                        "ids": "45e09920-dba0-4d64-880a-620628b1a58e"
                                      },
                                      {
                                        "type": "NodeComponent",
                                        "id": "normalServiceProcess",
                                        "properties": {},
                                        "position": {
                                          "x": 2560,
                                          "y": 510
                                        },
                                        "ids": "7cb2f984-5b2a-41e8-ae68-72e895ae3698"
                                      }
                                    ],
                                    "position": {
                                      "x": 2650,
                                      "y": 420
                                    },
                                    "ids": "785c7b36-25c0-48bd-bb63-e7a36a287129"
                                  }
                                ]
                              },
                              {
                                "type": "NodeComponent",
                                "id": "dateRewrite",
                                "properties": {},
                                "position": {
                                  "x": 1750,
                                  "y": 610
                                },
                                "ids": "1a0c73a1-09e4-40fd-a4e5-053ceaee63e8"
                              }
                            ],
                            "properties": {
                              "any": false
                            },
                            "position": {
                              "x": 1660,
                              "y": 492.5
                            },
                            "ids": "27e26897-9530-44b6-b957-029b8803fe3d"
                          },
                          {
                            "type": "IF",
                            "condition": {
                              "type": "NodeIfComponent",
                              "id": "socialCheck",
                              "properties": {},
                              "position": {
                                "x": 2830,
                                "y": 537.5
                              },
                              "ids": "2f1eb16b-1ce9-4de9-9169-3ddf72c42b4a"
                            },
                            "children": [
                              {
                                "type": "THEN",
                                "children": [
                                  {
                                    "type": "NodeComponent",
                                    "id": "llmChat",
                                    "properties": {},
                                    "position": {
                                      "x": 2920,
                                      "y": 375
                                    },
                                    "ids": "d1196b9c-5dc7-489c-9954-103b48bbf006"
                                  },
                                  {
                                    "type": "NodeComponent",
                                    "id": "endCmp",
                                    "properties": {},
                                    "position": {
                                      "x": 3010,
                                      "y": 375
                                    },
                                    "ids": "024b5803-3c8c-41e2-add0-b78d0e5da1cb"
                                  }
                                ]
                              }
                            ],
                            "position": {
                              "x": 3100,
                              "y": 537.5
                            },
                            "ids": "ac56c659-13c4-4875-b6dc-7e24193605b7"
                          },
                          {
                            "type": "NodeComponent",
                            "id": "historyLoad",
                            "properties": {},
                            "position": {
                              "x": 3190,
                              "y": 537.5
                            },
                            "ids": "4be8fbc1-38b0-400c-8c57-2e7596378845"
                          },
                          {
                            "type": "WHEN",
                            "children": [
                              {
                                "type": "IF",
                                "condition": {
                                  "type": "NodeIfComponent",
                                  "id": "isNeedConformsCheck",
                                  "properties": {},
                                  "position": {
                                    "x": 3370,
                                    "y": 420
                                  },
                                  "ids": "ec66e199-9940-4b0f-84dc-1e149a0cade5"
                                },
                                "children": [
                                  {
                                    "type": "NodeComponent",
                                    "id": "conformsCheck",
                                    "properties": {},
                                    "position": {
                                      "x": 3460,
                                      "y": 375
                                    },
                                    "ids": "0299aa22-1046-43e8-a768-b47234d98de1"
                                  }
                                ],
                                "position": {
                                  "x": 3550,
                                  "y": 420
                                },
                                "ids": "ec0df3f7-0c36-4f16-8fda-af35646722f8"
                              },
                              {
                                "type": "NodeComponent",
                                "id": "roundRewriteRequest",
                                "properties": {},
                                "position": {
                                  "x": 3370,
                                  "y": 610
                                },
                                "ids": "5b574a45-88b4-40a7-91f1-840d80ac2aea"
                              }
                            ],
                            "properties": {
                              "any": false
                            },
                            "position": {
                              "x": 3280,
                              "y": 537.5
                            },
                            "ids": "31a99e77-a4f7-4460-a6ef-0d75bb5482e7"
                          },
                          {
                            "type": "NodeComponent",
                            "id": "searchWord",
                            "properties": {},
                            "position": {
                              "x": 3730,
                              "y": 537.5
                            },
                            "ids": "6e0b52d1-7c8f-40e1-94b7-5f6ccaf92011"
                          },
                          {
                            "type": "SWITCH",
                            "condition": {
                              "type": "NodeSwitchComponent",
                              "id": "roundRewriteProcess",
                              "properties": {},
                              "position": {
                                "x": 3820,
                                "y": 537.5
                              },
                              "ids": "7778e4d2-bd35-4207-b134-a20653b67781"
                            },
                            "children": [
                              {
                                "type": "NodeComponent",
                                "id": "lastChain",
                                "properties": {
                                  "tag": "unrewritten"
                                },
                                "position": {
                                  "x": 3910,
                                  "y": 375
                                },
                                "ids": "d5b2e1a2-cd52-4268-8de9-4afb77418272"
                              },
                              {
                                "type": "THEN",
                                "children": [
                                  {
                                    "type": "IF",
                                    "condition": {
                                      "type": "NodeIfComponent",
                                      "id": "socialCheck",
                                      "properties": {},
                                      "position": {
                                        "x": 3910,
                                        "y": 492.5
                                      },
                                      "ids": "e904393d-ad98-4459-9688-b4a482aa775f"
                                    },
                                    "children": [
                                      {
                                        "type": "THEN",
                                        "children": [
                                          {
                                            "type": "NodeComponent",
                                            "id": "llmChat",
                                            "properties": {},
                                            "position": {
                                              "x": 4000,
                                              "y": 447.5
                                            },
                                            "ids": "a861a908-8d1c-4f22-8ef1-ee65f3973d63"
                                          },
                                          {
                                            "type": "NodeComponent",
                                            "id": "endCmp",
                                            "properties": {},
                                            "position": {
                                              "x": 4090,
                                              "y": 447.5
                                            },
                                            "ids": "2e8285e0-cda8-49f0-b9d5-50ac822309a5"
                                          }
                                        ]
                                      }
                                    ],
                                    "position": {
                                      "x": 4180,
                                      "y": 492.5
                                    },
                                    "ids": "3304ffc1-a6ce-47e6-bea6-56e6e82cad33"
                                  },
                                  {
                                    "type": "NodeComponent",
                                    "id": "cache",
                                    "properties": {
                                      "tag": "rewritten"
                                    },
                                    "position": {
                                      "x": 4270,
                                      "y": 492.5
                                    },
                                    "ids": "cc7681dc-11f1-4521-b7e1-eeb1410d21c2"
                                  },
                                  {
                                    "type": "IF",
                                    "condition": {
                                      "type": "NodeIfComponent",
                                      "id": "cacheHitCheck",
                                      "properties": {},
                                      "position": {
                                        "x": 4360,
                                        "y": 492.5
                                      },
                                      "ids": "51e99905-bde4-4404-8078-9031e48f4238"
                                    },
                                    "children": [
                                      {
                                        "type": "NodeComponent",
                                        "id": "endCmp",
                                        "properties": {},
                                        "position": {
                                          "x": 4450,
                                          "y": 447.5
                                        },
                                        "ids": "92267ad4-f44b-4877-8f7b-5907b8a308c9"
                                      }
                                    ],
                                    "position": {
                                      "x": 4540,
                                      "y": 492.5
                                    },
                                    "ids": "c9402f91-6586-4b3d-b891-6f8566083669"
                                  },
                                  {
                                    "type": "NodeComponent",
                                    "id": "lastChain",
                                    "properties": {},
                                    "position": {
                                      "x": 4630,
                                      "y": 492.5
                                    },
                                    "ids": "56bf90be-e3b2-4a1d-beed-e6fcb44750e0"
                                  }
                                ],
                                "properties": {
                                  "id": "afterRewrittenProcess",
                                  "tag": "rewritten"
                                }
                              },
                              {
                                "type": "NodeComponent",
                                "id": "endCmp",
                                "properties": {
                                  "tag": "end"
                                },
                                "position": {
                                  "x": 3910,
                                  "y": 610
                                },
                                "ids": "b914257e-8fb5-4b1f-98fe-30967e5b9d01"
                              },
                              {
                                "type": "NodeComponent",
                                "id": "llmChat",
                                "properties": {
                                  "tag": "chat"
                                },
                                "position": {
                                  "x": 3910,
                                  "y": 700
                                },
                                "ids": "5bd3dc9d-379f-4c7f-b801-e52d87497ef1"
                              }
                            ],
                            "position": {
                              "x": 4720,
                              "y": 537.5
                            },
                            "ids": "754da1f1-7076-4381-b807-32abcc873268"
                          }
                        ]
                      }
                    ],
                    "position": {
                      "x": 4810,
                      "y": 420
                    },
                    "ids": "267d869b-5346-4344-a25b-1f58afe15012"
                  }
                ],
                "position": {
                  "x": 4900,
                  "y": 375
                },
                "ids": "8461db1b-5c29-4a71-8263-30d0bde7be2b"
              }
            ],
            "position": {
              "x": 4990,
              "y": 330
            },
            "ids": "db524fe9-da9d-4207-a163-ef6670e48e97"
          }
        ],
        "position": {
          "x": 5080,
          "y": 285
        },
        "ids": "9009c447-1f90-4846-bf51-318712ea6693"
      }
    ]
  },
  // 并行编排(WHEN)
  WHEN: {
    type: ConditionTypeEnum.THEN,
    children: [
      { type: NodeTypeEnum.COMMON, id: 'a' },
      {
        type: ConditionTypeEnum.WHEN,
        children: [
          { type: NodeTypeEnum.COMMON, id: 'b' },
          { type: NodeTypeEnum.COMMON, id: 'c' },
          { type: NodeTypeEnum.COMMON, id: 'd' },
        ],
      },
      { type: NodeTypeEnum.COMMON, id: 'e' },
    ],
  },
  // 选择编排(SWITCH)
  SWITCH: {
    type: ConditionTypeEnum.SWITCH,
    condition: { type: NodeTypeEnum.SWITCH, id: 'x' },
    children: [
      { type: NodeTypeEnum.COMMON, id: 'a' },
      { type: NodeTypeEnum.COMMON, id: 'b' },
      { type: NodeTypeEnum.COMMON, id: 'c' },
      { type: NodeTypeEnum.COMMON, id: 'd' },
    ],
  },
  // 条件编排(IF)
  IF: {
    type: ConditionTypeEnum.IF,
    condition: { type: NodeTypeEnum.BOOLEAN, id: 'x' },
    children: [{ type: NodeTypeEnum.COMMON, id: 'a' }],
  },
  // FOR循环
  FOR: {
    type: ConditionTypeEnum.FOR,
    condition: { type: NodeTypeEnum.BOOLEAN, id: 'x' },
    children: [
      {
        type: ConditionTypeEnum.THEN,
        children: [
          { type: NodeTypeEnum.COMMON, id: 'a' },
          { type: NodeTypeEnum.COMMON, id: 'b' },
        ],
      },
    ],
  },
  // WHILE循环
  WHILE: {
    type: ConditionTypeEnum.WHILE,
    condition: { type: NodeTypeEnum.BOOLEAN, id: 'x' },
    children: [
      {
        type: ConditionTypeEnum.THEN,
        children: [
          { type: NodeTypeEnum.COMMON, id: 'a' },
          { type: NodeTypeEnum.COMMON, id: 'b' },
        ],
      },
    ],
  },
  // ITERATOR循环
  ITERATOR: {
    type: ConditionTypeEnum.ITERATOR,
    condition: { type: NodeTypeEnum.ITERATOR, id: 'x' },
    children: [
      {
        type: ConditionTypeEnum.THEN,
        children: [
          { type: NodeTypeEnum.COMMON, id: 'a' },
          { type: NodeTypeEnum.COMMON, id: 'b' },
        ],
      },
    ],
  },
  // CATCH 捕获异常
  CATCH: {
    type: ConditionTypeEnum.CATCH,
    condition: {
      type: ConditionTypeEnum.WHEN,
      children: [
        { type: NodeTypeEnum.COMMON, id: 'a' },
        { type: NodeTypeEnum.COMMON, id: 'b' },
        { type: NodeTypeEnum.COMMON, id: 'c' },
      ],
    },
    children: [
      {
        type: ConditionTypeEnum.IF,
        condition: { type: NodeTypeEnum.IF, id: 'x' },
        children: [{ type: NodeTypeEnum.COMMON, id: 'y' }],
      },
    ],
  },
  // AND_OR_NOT 与或非
  AND: {
    type: ConditionTypeEnum.IF,
    condition: {
      type: ConditionTypeEnum.AND,
      children: [
        {
          type: ConditionTypeEnum.OR,
          children: [
            { type: NodeTypeEnum.BOOLEAN, id: 'a' },
            { type: NodeTypeEnum.BOOLEAN, id: 'b' },
          ],
        },
        {
          type: ConditionTypeEnum.NOT,
          children: [{ type: NodeTypeEnum.BOOLEAN, id: 'c' }],
        },
      ],
    },
    children: [
      { type: NodeTypeEnum.COMMON, id: 'x' },
      { type: NodeTypeEnum.COMMON, id: 'y' },
    ],
  },
  // CHAIN 子流程
  CHAIN: {
    type: ConditionTypeEnum.THEN,
    children: [
      { type: NodeTypeEnum.COMMON, id: 'A' },
      { type: NodeTypeEnum.COMMON, id: 'B' },
      {
        type: ConditionTypeEnum.WHEN,
        children: [
          {
            type: ConditionTypeEnum.CHAIN,
            id: 't1',
            // ids: '1',
            // position: { x: 220, y: 40 },
            children: [
              {
                type: ConditionTypeEnum.THEN,
                children: [
                  { type: NodeTypeEnum.COMMON, id: 'C' },
                  {
                    type: ConditionTypeEnum.WHEN,
                    children: [
                      { type: NodeTypeEnum.COMMON, id: 'J' },
                      { type: NodeTypeEnum.COMMON, id: 'K' },
                    ],
                  },
                ],
              },
            ],
          },
          { type: NodeTypeEnum.COMMON, id: 'D' },
          {
            type: ConditionTypeEnum.CHAIN,
            id: 't2',
            children: [
              {
                type: ConditionTypeEnum.THEN,
                children: [
                  { type: NodeTypeEnum.COMMON, id: 'H' },
                  { type: NodeTypeEnum.COMMON, id: 'I' },
                ],
              },
            ],
          },
        ],
      },
      {
        type: ConditionTypeEnum.SWITCH,
        condition: { type: NodeTypeEnum.COMMON, id: 'X' },
        children: [
          { type: NodeTypeEnum.COMMON, id: 'M' },
          { type: NodeTypeEnum.COMMON, id: 'N' },
          {
            type: ConditionTypeEnum.CHAIN,
            id: 'w1',
            children: [
              {
                type: ConditionTypeEnum.WHEN,
                children: [
                  { type: NodeTypeEnum.COMMON, id: 'Q' },
                  {
                    type: ConditionTypeEnum.THEN,
                    children: [
                      { type: NodeTypeEnum.COMMON, id: 'P' },
                      { type: NodeTypeEnum.COMMON, id: 'R' },
                    ],
                  },
                ],
                properties: {
                  id: 'w01',
                },
              },
            ],
          },
        ],
      },
    ],
  },
} as Record<string, any>;
