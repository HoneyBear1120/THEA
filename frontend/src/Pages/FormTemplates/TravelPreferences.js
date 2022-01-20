
export const TravelPreferenceTemplate = {
    categoryId:"zb2jCbK2ht0IRu86AAAT",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Travel Preferences", 
    isPinned: false,
    template_name:'TravelPreferences',
    subTitle:"",
    icon:'category_assets/file-1627886306658.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Flight Preferences",
        id:"value",
        placeHolder: "Flight Preferences",
        type:'text',
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "flight class",
                labelPlaceHolder: "flight class",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'flight_class'
              },
            {
                labelFieldType: "text",
                labelValue: "seat assignment",
                labelPlaceHolder: "seat assignment",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'seat_assignment',
              },
              {
                labelFieldType: "text",
                labelValue: "connections",
                labelPlaceHolder: "connections",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'flight_connection'
              },
              {
                labelFieldType: "text",
                labelValue: "departure time",
                labelPlaceHolder: "departure time",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'flight_departure'
              },
              {
                labelFieldType: "text",
                labelValue: "return time",
                labelPlaceHolder: "return time",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'flight_departure'
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
        value:"Airports",
        id:"value",
        placeHolder: "Airports",
        type:'text',
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "primary (home)",
                labelPlaceHolder: "primary",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "preferred",
                labelPlaceHolder: "preferred",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
            {
                labelFieldType: "text",
                labelValue: "excluded",
                labelPlaceHolder: "excluded",
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
  
  
  