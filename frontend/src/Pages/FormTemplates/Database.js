
export const DatabaseTemplate={
    categoryId:"KOXZzrjI6xSMgqMpAAAB",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Database", 
    isPinned: false,
    template_name:'DataBase',
    subTitle:"",
    icon:'category_assets/file-1627885637443.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Login",
        id:"value",
        placeHolder: "Login",
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
            
            showDecrement:true
          },
          {
            labelFieldType: "text",
            labelValue: "password",
            labelPlaceHolder: "password",
            valueFieldType: "text",
            value:"",
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
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true
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
          },
        ],
      },
      {
       
        titleFieldType: "text",
        value: "Section",
        placeHolder: "Section",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "text",
            labelValue: "type",
            labelPlaceHolder: "type",
            valueFieldType: "options",
            value: "",
            valuePlaceHolder: "select",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
             option:'database_type'
          },
          {
            labelFieldType: "text",
            labelValue: "server",
            labelPlaceHolder:"server",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            
          },
          {
            labelFieldType: "text",
            labelValue: "port",
            labelPlaceHolder: "port",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "database",
            labelPlaceHolder: "database",
            valueFieldType: "tel",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "username",
            labelPlaceHolder: "username",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "password",
            labelPlaceHolder: "password",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "SID",
            labelPlaceHolder: "SID",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "alias",
            labelPlaceHolder: "alias",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "connecting op",
            labelPlaceHolder: "connecting op",
            valueFieldType: "text",
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
  
  
  
    
  }