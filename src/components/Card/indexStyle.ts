import styled from 'styled-components';

export const Cardproject = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    max-width: 300px;
    text-align: center;

    :hover {
        transform: scale(1.05);
    }
`;

export const ProjectContent = styled.div`
    margin: 0 0 8px;

    h3{
        margin: 0 0 8px;
    }

    p{
        font-size: 14px;
        color: white;
    }
`;

export const BoxIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 12px 0;

    .tech-icon{
        width: 24px;
        height: 24px;
    }
`;

export const ProjectLinks = styled.div`

    .button{
        display: inline-block;
        margin: 8px;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;
    }
`;