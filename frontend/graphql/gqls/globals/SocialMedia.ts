import { gql } from '@apollo/client'

gql`
	query GetSocialMedia {
		SocialMedia {
			icons {
				id
				icon {
					image {
						url
					}
					link
				}
			}
		}
	}
`
