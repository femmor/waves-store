import React from 'react'

const FormField = ({ formData, change, id }) => {

    const renderTemplate = () => {
        let formTemplate = null;
            switch (formData.element) {
                case ('input'):
                    formTemplate = (
                        <div className="formBlock">
                            <input {...formData.config} value={formData.value} onBlur={e => change({e, id, blur: true})} onChange={e => change({e, id})}/>
                        </div>
                    )
                    break;
            
                default:
                    formTemplate = null
            }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormField
