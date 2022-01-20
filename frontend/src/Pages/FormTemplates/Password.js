
export const PasswordTemplate = {
    categoryId:"lWrbPWc3xi3ipFycAAAN",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Password", 
    isPinned: false,
    template_name:'Password',
    subTitle:"",
    icon:'category_assets/file-1627886097669.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Login information",
        id:"value",
        placeHolder: "Login information",
        type:'text',
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "password",
                labelPlaceHolder: "password",
                valueFieldType: "password",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "website",
                labelPlaceHolder: "website",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
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
  
  
  