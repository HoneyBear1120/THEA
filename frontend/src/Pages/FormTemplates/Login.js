
export const LoginTemplate = {
    categoryId:"4l3iCQBFXdu50cvdAAAH",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Login", 
    isPinned: false,
    template_name:'Login',
    subTitle:"",
    icon:'category_assets/file-1627885888806.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Login Information",
        id:"value",
        placeHolder: "Login Information",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "text",
            labelValue: "username",
            labelPlaceHolder: "username",
            valueFieldType: "text",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "password",
            labelPlaceHolder: "password",
            valueFieldType: "password",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true
          },
          {
            labelFieldType: "text",
            labelValue: "website",
            labelPlaceHolder: "website",
            valueFieldType: "text",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true
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
            value: "",
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
            value: "",
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
  
  
  
  