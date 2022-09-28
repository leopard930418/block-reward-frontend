import React from 'react'
import { Button, Input } from '../../../styles'
import { LayoutContainer } from '../../shared'

import {
  Container,
  InnerContainer,
  Head,
  Heading,
  HeadDes,
  FormWraper,
  FormRow,
  FormLabel
} from './styles'

export const ForgotPassword = () => {
  return (
    <LayoutContainer>
      <Container>
        <InnerContainer>
          <Head>
            <Heading>Forgot Password</Heading>
            <HeadDes>To recover your BlockReward account, enter your email address below</HeadDes>
          </Head>
          <FormWraper>
            <FormRow>
              <FormLabel>EMAIL</FormLabel>
              <Input placeholder='Enter email address' />
            </FormRow>
            <FormRow>
              <Button color="primary">Continue</Button>
            </FormRow>
            <FormRow>
              BlockReward <a href="./terms" target="_blank" rel="noreferrer">Terms and Conditions</a> and <a href="./privacy" target="_blank" rel="noreferrer">Privacy Policy</a> apply. This site is protected by Google reCAPTCHA.
            </FormRow>
          </FormWraper>
        </InnerContainer>
      </Container>
    </LayoutContainer>
  )
}