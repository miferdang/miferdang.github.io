import { gql } from '@apollo/client'

gql`
	query GetHomePage {
		Page(id: 2) {
			hero {
				title
				description
				subDescription
			}
			layout {
				... on ContentBlock {
					blockName
					richText
				}
				... on ArchiveBlock {
					blockName
					seeMore {
						label
						url
					}
					populatedDocs {
						relationTo
						value {
							... on Experience {
								id
								title
								description
								time {
									startingTime
									endingTime
								}
								experiencePosition: position
								tools {
									title
								}
								projects {
									name
									link
								}
							}
						}
					}
				}
				... on ArchiveBlock {
					blockName
					seeMore {
						label
						url
					}
					populatedDocs {
						relationTo
						value {
							... on Project {
								id
								name
								description
								link
								thumbnail {
									url
								}
								time {
									startingTime
									endingTime
								}
								projectPositions: position
								tools {
									title
								}
							}
						}
					}
				}
			}
		}
	}
`
