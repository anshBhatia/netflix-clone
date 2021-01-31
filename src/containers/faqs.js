import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';
import { OptForm } from '../components/';

export const FaqsContainer = () => {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(data=>(
                <Accordion.Item key={data.id}>
                    <Accordion.Header>{data.header}</Accordion.Header>
                    <Accordion.Body>{data.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <OptForm>
                <OptForm.Input placeholder="Email address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    );
}