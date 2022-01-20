
export const MedicalTemplate = {
    categoryId:"zb2jCbK2ht0IRu86BBP",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Medical", 
    isPinned: false,
    template_name:'Medical',
    subTitle:"",
    icon:'category_assets/file-1627885920407.png',
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
            labelValue: "full name",
            labelPlaceHolder: "full name",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "full name",
            isActive: "true",
            isError:false,
            showDecrement:true,
          },
          // {
          //   labelFieldType: "text",
          //   labelValue: "date of birth",
          //   labelPlaceHolder: "yy-mm-dd",
          //   valueFieldType: "date",
          //   value: "",
          //   valuePlaceHolder: "new field",
          //   isActive: "true",
          //   isError:false,
          //   showDecrement:true,
          //   max:new Date().toISOString().slice(0, 10)
          // },
          {
            labelFieldType: "text",
            labelValue: "date of birth",
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
            labelValue: "sex",
            labelPlaceHolder: "sex",
            valueFieldType: "options",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            option:'sex'
          },
          {
            labelFieldType: "text",
            labelValue: "gender identity",
            labelPlaceHolder: "gender identity",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            maxLength:10
          },
          {
            labelFieldType: "text",
            labelValue: "blood type",
            labelPlaceHolder: "blood type",
            valueFieldType: "options",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            option:'blood_type'
          },
          {
            labelFieldType: "text",
            labelValue: "RH factor",
            labelPlaceHolder: "RH factor",
            valueFieldType: "options",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            option:'blood_factor'
          },
          {
            labelFieldType: "text",
            labelValue: "height",
            labelPlaceHolder: "height",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "feet, inches",
            isActive: "true",
            isError:false,
            showDecrement:true,
            maxLength:4,
          },
          {
            labelFieldType: "text",
            labelValue: "weight",
            labelPlaceHolder: "weight",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
            maxLength:4,
          },
          {
            labelFieldType: "text",
            labelValue: "hair color",
            labelPlaceHolder: "hair color",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "eye color",
            labelPlaceHolder: "eye color",
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
              showDecrement:false,
            }
        ],
      },
      {
        titleFieldType: "text",
        value:"Allergies",
        id:"value",
        placeHolder: "Allergies",
        type:'text',
        sectionForm: [
          {
            labelFieldType: "value",
            labelValue: "",
            labelPlaceHolder: "custom",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            readOnly:false,
            showDecrement:false,
          },]
        },
      {
        titleFieldType: "text",
        value:"Medication",
        id:"value",
        placeHolder: "Medication",
        type:'table',
        sectionForm: [
          {
            isActive: "true",
            isError:false,
          
            showDecrement:true,
            columnTitle:['Name', 'Location', 'Reason', 'Date'],
            columnType:['text', 'text','text','date'],
            rowValues:[{name:"", location:"", reason:'', date:'', showDecrement:false,}]
            
          },
        ]
        },
        {
          titleFieldType: "text",
          value:"Medical conditions",
          id:"value",
          placeHolder: "Medical conditions",
          type:'table',
          sectionForm: [
            {
              isActive: "true",
              isError:false,
            
              showDecrement:true,
              columnTitle:['Name', 'Location', 'Reason', 'Date'],
              columnType:['text', 'text','text','date'],
              rowValues:[{name:"", location:"", reason:'', date:'', showDecrement:false,}]
              
            },
          ]
          },
          {
            titleFieldType: "text",
            value:"Surgical History",
            id:"value",
            placeHolder: "Surgical History",
            type:'table',
            sectionForm: [
              {
                isActive: "true",
                isError:false,
              
                showDecrement:true,
                columnTitle:['Name', 'Location', 'Reason', 'Date'],
                columnType:['text', 'text','text','date'],
                rowValues:[{name:"", location:"", reason:'', date:'', showDecrement:false,}]
                
              },
            ]
            },
            {
              titleFieldType: "text",
              value:"Vaccinations",
              id:"value",
              placeHolder: "Vaccinations",
              type:'table',
              sectionForm: [
                {
                  isActive: "true",
                  isError:false,
                
                  showDecrement:true,
                  columnTitle:['Name', 'Location', 'Reason', 'Date'],
                  columnType:['text', 'text','text','date'],
                  rowValues:[{name:"", location:"", reason:'', date:'', showDecrement:false,}]
                  
                },
              ]
              },
              {
                titleFieldType: "text",
                value:"Section",
                id:"value",
                placeHolder: "Section",
                type:'table',
                sectionForm: [
                  {
                    isActive: "true",
                    isError:false,
                  
                    showDecrement:true,
                    columnTitle:['Name', 'Location', 'Reason', 'Date'],
                    columnType:['text', 'text','text','date'],
                    rowValues:[{name:"", location:"", reason:'', date:'', showDecrement:false,}]
                    
                  },
                ]
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
                showDecrement:false,
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
                showDecrement:false,
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
  
  
  
