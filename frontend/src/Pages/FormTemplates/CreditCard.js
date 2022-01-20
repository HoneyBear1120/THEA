
export const CreditCardTemplate={
    categoryId:"EmDmUHgx37AdxkoLAAAA",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Credit Card", 
    isPinned: false,
    template_name:'CreditCard',
    subTitle:"",
    icon:'category_assets/file-1627885552944.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"section",
        id:"value",
        placeHolder: "section",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "text",
            labelValue: "cardholder name",
            labelPlaceHolder: "cardholder name",
            valueFieldType: "text",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true
          },
          {
            labelFieldType: "text",
            labelValue: "type",
            labelPlaceHolder: "type",
            valueFieldType: "options",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
            option:'credit_card_type'
          },
          {
            labelFieldType: "text",
            labelValue: "card number",
            labelPlaceHolder: "card number",
            valueFieldType: "text",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "verification number",
            labelPlaceHolder: "verification number",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "expiry date",
            labelPlaceHolder: "expiry date",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "yy/mm",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "valid from",
            labelPlaceHolder: "valid from",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "yy/mm",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "PIN",
            labelPlaceHolder: "PIN",
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
        value: "Contact Information",
        placeHolder: "Contact Information",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "text",
            labelValue: "issuing bank",
            labelPlaceHolder: "issuing bank",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "phone (local)",
            labelPlaceHolder:"phone",
            valueFieldType: "tel",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            
          },
          {
            labelFieldType: "text",
            labelValue: "phone (toll free)",
            labelPlaceHolder: "phone (toll free)",
            valueFieldType: "tel",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "phone (intl)",
            labelPlaceHolder: "phone (intl)",
            valueFieldType: "tel",
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
        value: "Additional Details",
        placeHolder: "Additional Details",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "text",
            labelValue: "credit limit",
            labelPlaceHolder:"credit limit",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            
          },
          {
            labelFieldType: "text",
            labelValue: "cash withdraw limit",
            labelPlaceHolder: "cash withdraw limit",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "interest rate",
            labelPlaceHolder: "interest rate",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "issue number",
            labelPlaceHolder: "issue number",
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