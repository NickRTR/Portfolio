import { gql } from "graphql-request";

export const aboutPreviewQuery = gql`
	query Assets {
		about(where: { type: "preview" }) {
			text {
				html
			}
		}
	}
`;

export const skillSectionsQuery = gql`
	query skillsSections {
		skillSections {
			title
			skills(first: 100) {
				title
				url
			}
		}
	}
`;

export const projectsQuery = gql`
	query projects {
		projects(orderBy: publishedAt_DESC) {
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
