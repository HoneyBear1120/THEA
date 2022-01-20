
export const BankAccountTemplate = {
  categoryId:"pVi_iMOf-hluLtTHAAAA",
  isRequestedCategory:false,
  titleFieldType:"text",
  formTitle:"Bank Account", 
  isPinned: false,
  template_name:'BankAccount',
  subTitle:"",
  icon:'category_assets/file-1627885439850.png',
  //main section starts over here.
  sections: [
    {
      titleFieldType: "text",
      value:"Account Information",
      id:"value",
      placeHolder: "Account Information",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "text",
          labelValue: "bank name",
          labelPlaceHolder: "bank name",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "name on account",
          labelPlaceHolder: "name on account",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "type",
          labelPlaceHolder: "type",
          valueFieldType: "options",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
          option:'bank_account_type'
        },
        {
          labelFieldType: "text",
          labelValue: "routing number",
          labelPlaceHolder: "routing number",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "account number",
          labelPlaceHolder: "account number",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "SWIFT",
          labelPlaceHolder: "SWIFT",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true
        },
        {
          labelFieldType: "text",
          labelValue: "IBAN",
          labelPlaceHolder: "IBAN",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true
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
          showDecrement:false
        },
      ],
    },
    {
     
      titleFieldType: "text",
      value: "Branch Information",
      placeHolder: "Branch Information",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "",
          labelValue: "phone",
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
          labelValue: "address",
          labelPlaceHolder: "address",
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
              showDecrement:false,
            }
          ]
        }  

  ]
};







