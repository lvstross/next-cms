import React from 'react';
import Head from 'next/Head';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  background-color: #cdcdcd;
  display: flex;
  flex-direction: column;
`;

interface PageContainerProps {
    title: String;
    children: React.ReactChildren;
};

export default function PageContainer({ title, children }) {
    return (
        <Container>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            {children}
        </Container>
    );
};