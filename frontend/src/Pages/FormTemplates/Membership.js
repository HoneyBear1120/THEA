
export const MembershipTemplate = {
  categoryId:"hDA5YuLNKBjtE-LKAAAJ",
  isRequestedCategory:false,
  titleFieldType:"text",
  formTitle:"Membership", 
  isPinned: false,
  template_name:'Membership',
  subTitle:"",
  icon:'category_assets/file-1627885954888.png',
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
          labelValue: "group",
          labelPlaceHolder: "group",
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
          labelValue: "telephone",
          labelPlaceHolder: "telephone",
          valueFieldType: "tel",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "member name",
          labelPlaceHolder: "member name",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "member since",
          labelPlaceHolder: "member since",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "yyyy-mm",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "expiry date",
          labelPlaceHolder: "expiry date",
          valueFieldType:"text",
          value: "",
          valuePlaceHolder: "yyyy-mm",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "Member ID",
          labelPlaceHolder: "Member ID",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "PIN",
          labelPlaceHolder: "PIN",
          valueFieldType: "password",
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
};
