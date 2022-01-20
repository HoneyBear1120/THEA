
export const SSNTemplate = {
    categoryId:"M37Zrgo3_3Y1WJviAAAS",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"SSN", 
    isPinned: false,
    template_name:'SSN',
    subTitle:"",
    icon:'category_assets/file-1627886268888.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Section",
        id:"value",
        placeHolder: "Section",
        type:'text',  
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "name",
                labelPlaceHolder: "name",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
            {
                labelFieldType: "text",
                labelValue: "ssn number",
                labelPlaceHolder: "ssn number",
                valueFieldType: "password",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
          {
              labelFieldType: "text",
              labelValue: "",
              labelPlaceHolder: "custom",
              valueFieldType: "text",
              value: "",
              valuePlaceHolder: "new field",
              isActive: "true",
              isError:false,
              readOnly:false,
              showDecrement:false
            }
        ],
      },
      {
        
          titleFieldType: "text",
          value: "Attachment",
          placeHolder: "Attachment",
          type:'attachment',
          sectionForm: [
          
          ]
        },
        {
            
            titleFieldType: "text",
            value: "Section",
            placeHolder: "Section",
            type:'text',
            sectionForm: [
              {
                labelFieldType: "text",
                labelValue: "",
                labelPlaceHolder:"custom",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                showDecrement:false
              },
            ]
          },
          {
            
            titleFieldType: "text",
            value: "Section",
            placeHolder: "Section",
            type:'notes',
            sectionForm: [
              {
                labelFieldType:'notes',
                labelValue:"notes",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                showDecrement:false
              },
              {
                labelFieldType:'tags',
                labelValue:"tags",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                showDecrement:false
              }
            ]
          }  
  
    ]
  };
  
  
  