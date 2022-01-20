
export const DietaryPreferenceTemplate = {
  categoryId:"5A-4fJ9l9J5ZDwYQAAAC",
  isRequestedCategory:false,
  titleFieldType:"text",
  formTitle:"Dietary Preferences", 
  isPinned: false,
  template_name:'DietaryPreferences',
  subTitle:"",
  icon:'category_assets/file-1627885683842.png',
  //main section starts over here.
  sections: [
    {
      titleFieldType: "text",
      value:"General",
      id:"value",
      placeHolder: "General",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "text",
          labelValue: "primary diet",
          labelPlaceHolder: "primary diet",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
        
          showDecrement:true
        },
        {
          labelFieldType: "text",
          labelValue: "allergy",
          labelPlaceHolder: "allergy",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
        
          showDecrement:true
        },
        {
          labelFieldType: "text",
          labelValue: "likes",
          labelPlaceHolder: "likes",
          valueFieldType: "text",
          value: "",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
        
          showDecrement:true,
        },
        {
          labelFieldType: "text",
          labelValue: "dislikes",
          labelPlaceHolder: "dislikes",
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
          }
      ],
    },
    {
     
      titleFieldType: "text",
      value: "Meals",
      placeHolder: "Meals",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "",
          labelValue: "restaurant",
          labelPlaceHolder:"restaurant",
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
            labelValue: "menu item",
            labelPlaceHolder: "menu item",
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



