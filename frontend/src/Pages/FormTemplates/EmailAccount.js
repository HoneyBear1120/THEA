
export const EmailAccountTemplate = {
  categoryId:"IOoI6zjXx8DOMP4jAAAF",
  isRequestedCategory:false,
  titleFieldType:"text",
  formTitle:"Email Account", 
  isPinned: false,
  template_name:'EmailAccount',
  subTitle:"",
  icon:'category_assets/file-1627885809381.png',
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
          valueFieldType:"text",
          value: "",
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
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
          option:'email_type'
        },
        {
          labelFieldType: "text",
          labelValue: "server",
          labelPlaceHolder: "server",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "port number",
          labelPlaceHolder: "port number",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
          validationType:'number',
        },
        {
          labelFieldType: "text",
          labelValue: "security",
          labelPlaceHolder: "security",
          valueFieldType: "options",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
          option:'email_security'
        },
        {
          labelFieldType: "text",
          labelValue: "auth method",
          labelPlaceHolder: "auth method",
          valueFieldType: "options",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
          option:'email_method'
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
      value: "SMTP",
      placeHolder: "SMTP",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "",
          labelValue: "SMTP server",
          labelPlaceHolder:"SMTP server",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          showDecrement:true,
          
        },
        {
          labelFieldType: "text",
          labelValue: "port number",
          labelPlaceHolder: "port number",
          valueFieldType: "text",
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
            valueFieldType: "password",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
            labelFieldType: "text",
            labelValue: "security",
            labelPlaceHolder: "security",
            valueFieldType: "options",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
             option:'email_security'
          },
          {
            labelFieldType: "text",
            labelValue: "auth method",
            labelPlaceHolder: "auth method",
            valueFieldType: "options",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
             option:'email_auth_method'
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
        value: "Contact information",
        placeHolder: "Contact information",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "",
            labelValue: "provider",
            labelPlaceHolder:"provider",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            
          },
          {
            labelFieldType: "text",
            labelValue: "provider website",
            labelPlaceHolder: "provider website",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
             
          },
          {
              labelFieldType: "text",
              labelValue: "phone(local)",
              labelPlaceHolder: "phone(local)",
              valueFieldType: "tel",
              value: "",
              valuePlaceHolder: "new field",
              isActive: "true",
              isError:false,
              showDecrement:true,
               
            },
            {
                labelFieldType: "text",
                labelValue: "phone(toll free)",
                labelPlaceHolder: "phone(toll free)",
                valueFieldType: "tel",
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
