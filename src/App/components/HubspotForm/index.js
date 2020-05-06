import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'

const HUBSPOT_FORM_EVENT_TYPE = 'hsFormCallback'
const HUBSPOT_FORM_EVENT_FORM_SUBMIT = 'onFormSubmit'
const HUBSPOT_PORTAL_ID = '1704241'

export default class extends Component {
    static defaultProps = {
        onSubmit: () => {}
    }
    
    shouldTriggerOnFormSubmit = event =>
        event.data.type === HUBSPOT_FORM_EVENT_TYPE
        && event.data.eventName === HUBSPOT_FORM_EVENT_FORM_SUBMIT
        && event.data.id === this.props.formId

    handleFormSubmitEvent = event => {
        if (this.shouldTriggerOnFormSubmit(event)) {
            this.props.onSubmit(event.data.data)
        }
    }

    componentDidMount() {
        window.addEventListener('message', this.handleFormSubmitEvent)
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.handleFormSubmitEvent)
    }

    render() {
        const { formId } = this.props
        return (
            <HubspotForm
                portalId={HUBSPOT_PORTAL_ID}
                formId={formId}
                css=''/>
        )
    }
}
