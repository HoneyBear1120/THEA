
export const DrivingLicenceTemplate = {
    categoryId:"JBw7GgBlSpE2QCBTAAAE",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Driver's License", 
    isPinned: false,
    template_name:'Driverliscense',
    subTitle:"",
    icon:"category_assets/file-1627885954888.png",
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
            labelValue: "full name",
            labelPlaceHolder: "full name",
            valueFieldType: "text",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true
          },
          {
            labelFieldType: "text",
            labelValue: "address",
            labelPlaceHolder: "address",
            valueFieldType: "text",
            value:"",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true
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
            labelValue: "gender",
            labelPlaceHolder: "gender",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "height",
            labelPlaceHolder: "height",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "number",
            labelPlaceHolder: "number",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "licence class",
            labelPlaceHolder: "licence class",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "conditions/restriction",
            labelPlaceHolder: "conditions/restriction",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "state",
            labelPlaceHolder: "state",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "country",
            labelPlaceHolder: "country",
            valueFieldType:"text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          // {
          //   labelFieldType: "text",
          //   labelValue: "expiry date",
          //   labelPlaceHolder: "expiry date",
          //   valueFieldType:"date",
          //   value: "",
          //   valuePlaceHolder: "new field",
          //   isActive: "true",
          //   isError:false,
            
          //   showDecrement:true,
          // },
          {
            labelFieldType: "text",
            labelValue: "expiry date",
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
  
  
  
  