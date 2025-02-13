import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query GetPosts {
        getPosts {
            id
            content
            image
            author {
                id
                username
            }
            createdAt
        }
    }
`;
