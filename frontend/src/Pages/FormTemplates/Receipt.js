
export const ReceiptTemplate = {
    categoryId:"vd20EGNgWEwlb9dmAAAO",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Receipt", 
    isPinned: false,
    template_name:'Receipt',
    subTitle:"",
    icon:'category_assets/file-1627886130688.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Merchant",
        id:"value",
        placeHolder: "Merchant",
        type:'text',
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "date of purchase",
                labelPlaceHolder: "yyyy-mm-dd",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "yyyy-mm-dd",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
            {
                labelFieldType: "text",
                labelValue: "amount",
                labelPlaceHolder: "amount",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
          
              {
                labelFieldType: "text",
                labelValue: "description",
                labelPlaceHolder: "description",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "category",
                labelPlaceHolder: "category",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "card billed",
                labelPlaceHolder: "card billed",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "billing address",
                labelPlaceHolder: "billing address",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "confirmation number",
                labelPlaceHolder: "confirmation number",
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
  
  
  