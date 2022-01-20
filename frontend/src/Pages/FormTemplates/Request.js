
export const RequestTemplate = {
    categoryId:"wob9hRCuZPONHGFXAAAV",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Request", 
    isPinned: false,
    template_name:'Request',
    subTitle:"",
    icon:'category_assets/file-1627886370839.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Category",
        id:"value",
        placeHolder: "Category",
        type:'text',
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "notes",
                labelPlaceHolder: "notes",
                valueFieldType: "notes",
                value: "",
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
    ]
  };
  
  
  