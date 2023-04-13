import styled from "@emotion/styled";

const Wrapper = styled('div')`
max-width: 1360px;
widht: 100%;
padding: 0 20px;
margin: 0 auto;
`

const Container = ({ children, className = '' }) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    );
}

export default Container;


