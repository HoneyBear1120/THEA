
export const InsuranceTemplate = {
  categoryId:"_beqKvJaW99diOZxAAAG",
  isRequestedCategory:false,
  titleFieldType:"text",
  formTitle:"Insurance", 
  isPinned: false,
  template_name:'Insurance',
  subTitle:"",
  icon:'category_assets/file-1627885852551.png',
  //main section starts over here.
  sections: [
    {
      titleFieldType: "text",
      value:"Insurance Policy",
      id:"value",
      placeHolder: "Insurance Policy",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "text",
          labelValue: "insurance type",
          labelPlaceHolder: "insurance type",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true
        },
        {
          labelFieldType: "text",
          labelValue: "policy type",
          labelPlaceHolder: "policy type",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true
        },
        {
          labelFieldType: "text",
          labelValue: " policy number",
          labelPlaceHolder: "policy number",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "coverage limits",
          labelPlaceHolder: "coverage limits",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "effective date",
          labelPlaceHolder: "effective date",
          valueFieldType:"text",
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
      value: "Provider",
      placeHolder: "Provider",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "",
          labelValue: "name",
          labelPlaceHolder:"name",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
          
        },
        {
          labelFieldType: "text",
          labelValue: "phone number",
          labelPlaceHolder: "phone number",
          valueFieldType: "tel",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
           
        },
        {
            labelFieldType: "text",
            labelValue: "email address",
            labelPlaceHolder: "email address",
            valueFieldType: "text",
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







