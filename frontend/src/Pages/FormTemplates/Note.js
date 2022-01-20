
export const NoteTemplate = {
  categoryId:"XIMp9c38jYbJQ0B_AAAK",
  isRequestedCategory:false,
  titleFieldType:"text",
  formTitle:"Note", 
  isPinned: false,
  template_name:'Note',
  subTitle:"",
  icon:'category_assets/file-1627885991721.png',
  //main section starts over here.
  sections: [
    {
      titleFieldType: "text",
      value:"Note",
      id:"value",
      placeHolder: "Note",
      type:'text',
      sectionForm: [
        {
          labelFieldType: "notes",
          labelValue: "",
          labelPlaceHolder: "new field",
          valueFieldType: "text",
          value:"",
          valuePlaceHolder: "new field",
          isActive: "true",
          isError:false,
          
          showDecrement:false,
          option:'email_type'
        },],
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
