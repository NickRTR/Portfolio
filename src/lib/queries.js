import { gql } from "graphql-request";

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
`;

export const projectsQuery = gql`
	query projects {
		projects {
			slug
			shortDescription
			projectName
		}
	}
`;

export const projectQuery = gql`
	query project($slug: String!) {
		project(where: { slug: $slug }) {
			projectName
			url
			body {
				html
			}
		}
	}
`;

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
`;
