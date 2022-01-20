
export const DocumentTemplate = {
    categoryId:"HPwaa0xF7jLUGaeNAAAD",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Document", 
    isPinned: false,
    template_name:'Document',
    subTitle:"",
    icon:'category_assets/file-1627885712409.png',
    //main section starts over here.
    sections: [
      {
        
          titleFieldType: "text",
          value: "Document",
          placeHolder: "Document",
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
  
  
  
  