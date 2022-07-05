import { gql } from 'graphql-request'

export const postsQuery = gql`
    query posts {
        posts {
            title
            createdAt
            slug
        }
    }
`

export const postQuery = gql`
    query post($slug: String!) {
        post(where: {slug: $slug}) {
            title,
            createdAt
            updatedAt
            body {
                html
            },
        }
    }
`

export const skillSectionsQuery = gql`
    query allSkillSections {
        skillSections {
            title
            skills {
                title
                url
            }
        }
    }
`