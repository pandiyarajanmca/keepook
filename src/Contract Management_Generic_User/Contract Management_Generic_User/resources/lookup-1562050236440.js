(function(window, undefined) {
  var dictionary = {
    "caca2635-40a3-4c63-93d8-2caa2441823e": "View_Single_published",
    "8c9929d8-c51d-474a-97b6-74fcb9d1a6a2": "User_Manage_Executed_Contracts",
    "76db1a26-6b8d-464c-bdc5-3bc779413293": "User_Manage_delegated_Contracts",
    "6ebe0e8a-5f84-4bf0-b627-e475190125ae": "User_Send_Reminder_Delegation",
    "6e17b3ad-8ef0-4f01-af58-84577c0ec94d": "Create Smart_Template_Fields_Step3",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage",
    "3156b618-fc89-43e8-a1de-88a56423aa36": "User_Manage_PendingExecution_Contracts",
    "5fb174ed-5c1c-43b3-bdf1-597b767c6aec": "User_All_Contracts",
    "467bbb4c-b74e-4c22-b173-89bc586ca000": "All_Templates",
    "720a4ef6-0243-40e1-9b8c-aa6b5875c4a9": "User_My Tasks",
    "e37e27ad-4771-4663-b9f4-3a477f58de03": "All_delegated",
    "4f22bbc3-cc70-464b-8361-ae2a156f7ce1": "Edit_Single_published",
    "fb9ad1ac-07b8-4915-91b3-c428250b5a62": "User Dashboard",
    "145c0d4f-1fb4-42e8-b24b-9b70402d8319": "Create_Smart_Template_Info_Step1",
    "8fe3d400-c4f3-4a1f-ab0a-4fbf167351d7": "Edit_Single_Pending",
    "f78e58de-35bb-4235-98ec-9ee73057a112": "View_Single_Smart_Template",
    "a2099fe4-2c84-4f73-8b84-a9373391084d": "All_published",
    "67a3821c-4c67-40ee-a6b2-b3ce62287a4a": "Create Smart_Templates_Clauses_Step2_Info",
    "9ea0c399-bbe2-4116-9992-a0cb80c5cb4b": "All_Smart_Templates",
    "fe1c837c-95d5-4cd8-b19e-43cbd3d9e37c": "All_pending",
    "29d92449-ec85-493f-a850-c47073435b6f": "Tasks landing page",
    "b697e3da-2f58-4f77-be2d-536d12f5ec67": "Create Smart_Template_Clauses_Step2",
    "6599d5f6-8150-4a34-ba4e-f260ee6f4013": "User_All_tasks",
    "30c91ffc-bc1b-45f0-9619-94495302f984": "User_edit_task",
    "eeeaac5c-65a0-4ee4-a39b-3a19bf006917": "Add_New_template",
    "b6aab944-a927-4ee2-aa24-0fab7522ec02": "User_Generate_Contract",
    "4ea69d25-2c17-4d6d-a204-72ff0f251ec8": "Create Interactive Contract_Fields_Step3_Select",
    "0ba88ae0-9003-4fc2-a54a-4fc35a87ede2": "All_expired",
    "ae409b76-2219-4d0a-bdd6-975610e46752": "Edit_Single_Smart_Template",
    "b762049b-c04c-4ba6-87c4-019c425c51e5": "User_Create_Contract",
    "069ea945-5a1e-4435-9edc-8c18d13021ca": "User_Edit_Single_Pending_execution",
    "12132103-1085-4a02-9203-9ec4fbb9e8c9": "Edit_Single_delegated_delegate",
    "164899df-bc92-42d7-8686-a059f69d21f5": "User_Edit_Single_drafting_Contract",
    "733ef730-0fa4-42e1-a890-fc590d223d1d": "My Reports",
    "97126a04-e8fb-4742-96ea-a6a3270340e5": "Smart_Template_View_Legal_Tree",
    "e4118a0d-be42-4eb9-ad0e-7282ed645ba3": "Replace_template",
    "d22f9891-ca7d-46cb-bdc8-5a8249399043": "Smart Templates landing page",
    "2e6dde53-37da-4ccc-a255-c58c44a05a42": "View_Single_Template_History",
    "66cad430-efc7-40ea-bff9-73b3055083a8": "Replace_existing_pending",
    "fade22a3-315b-4f20-b1b4-07c980644a59": "User_Edit_Single_delegated",
    "42eb2964-8ee8-434a-865d-cf9cb065391c": "View_Single_delegated",
    "536c35a5-e705-43b1-9a68-4eec202e3067": "User_Send_For_execution",
    "78b9ae76-a895-45eb-b7b7-d4173b08152b": "User_Edit_Single_Executed",
    "e10051e7-300d-436f-9282-1c69b11af078": "Create Smart_Templates_Clauses_Step3_Info",
    "749f8948-7040-4f21-b89f-79643647c77f": "Edit_Single_delegated_delegator",
    "11f9fca8-31f4-4462-8186-0167fd881cd7": "Templates landing page",
    "a303f906-4e67-4720-90da-2848f13fee4d": "Contracts landing page",
    "55a1bae7-9983-4cc9-9879-aa26a19338c3": "View_Single_Pending",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "d2491618-2dec-4d4b-a950-603345b2b18e": "Top bar",
    "87567279-9e1f-4e78-abfb-0b32110659ec": "Top Menu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);