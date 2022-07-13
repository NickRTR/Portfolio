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
            id
            slug
            title
            createdAt
            updatedAt
            body {
                html
            },
            documentInStages {
                blogComments {
                    author
                    body
                    createdAt
                }
            }
        }
    }
`

export const commentQuery = gql`
    mutation comment($author: String!, $body: String!, $id: ID!) {
        updatePost(
            data: {blogComments: {create: {body: $body, author: $author}}}
            where: {id: $id}
        ) {
            id
        }
    }
`

export const skillSectionsQuery = gql`
    query skillsSections {
        skillSections {
            title
            skills {
                title
                url
            }
        }
    }
`

export const projectsQuery = gql`
    query projects {
        projects {
            slug
            shortDescription
            projectName
        }
    }
`

export const projectQuery = gql`
    query project($slug: String!) {
        project(where: {slug: $slug}) {
            projectName
            body {
                html
            },
        }
    }
`

export const usesSectionsQuery = gql`
    query usesSkillSections {
        usesSections {
            sectionTitle
            uses {
                use {
                    html
                }
            }
        }
    }
`

export const stuttgartWeather = gql`
    query stuttgartWeather($title: String) {
        values: weatherData(where: {title: $title}) {
            data
        }
    }
`