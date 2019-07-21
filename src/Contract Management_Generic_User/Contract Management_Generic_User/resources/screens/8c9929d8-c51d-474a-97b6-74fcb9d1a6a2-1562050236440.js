jQuery("#simulation")
  .on("mouseenter dragenter", ".s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_2 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_6 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_6": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_12 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_12": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_13 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_13 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_13": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_14 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_14": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_15 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  },{
                    "#s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 #s-Text_15": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8c9929d8-c51d-474a-97b6-74fcb9d1a6a2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_15")) {
      jEvent.undoCases(jFirer);
    }
  });