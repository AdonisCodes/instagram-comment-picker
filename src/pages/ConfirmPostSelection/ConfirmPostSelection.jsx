import { AtSignIcon, ChatIcon, CheckIcon, CloseIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Stack, Heading, Text, Divider, Image, CardFooter, Button, IconButton, Flex, Spinner } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react";
import { confirmFinal } from "./functions/Queries";
import { fetchPostData } from "./functions/Queries";
import { colors } from "../../config/config";
import loading from '../../assets/loading.gif'

export default function ConfirmPostSelection({ setPage }) {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({
    "__typename": "GraphSidecar",
    "id": "2785112756854504626",
    "shortcode": "CamtUvTuLyy",
    "dimensions": {
      "height": 1080,
      "width": 1080
    },
    "gating_info": null,
    "fact_check_overall_rating": null,
    "fact_check_information": null,
    "sensitivity_friction_info": null,
    "sharing_friction_info": {
      "should_have_sharing_friction": false,
      "bloks_app_url": null
    },
    "media_overlay_info": null,
    "media_preview": null,
    "display_url": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&ig_cache_key=Mjc4NTExMjc1Mjk0NTU1OTAxOA%3D%3D.2-ccb7-5&oh=00_AfBlyfMhY8b2n11-RliOAUQpGfi3ToT3hm-QxG_q3scdMQ&oe=64D35F70&_nc_sid=2999b8",
    "display_resources": [
      {
        "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBYtgQuPccT62MXv-2eH-pSo7vgA0sEq5nx62-hq6Jg-A&oe=64D35F70&_nc_sid=2999b8",
        "config_width": 640,
        "config_height": 640
      },
      {
        "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s750x750_sh0.08&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCVphwIddg9E58tBDqW-PyaNqmsuOWbNKwhZXO4DQHkGw&oe=64D35F70&_nc_sid=2999b8",
        "config_width": 750,
        "config_height": 750
      },
      {
        "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBlyfMhY8b2n11-RliOAUQpGfi3ToT3hm-QxG_q3scdMQ&oe=64D35F70&_nc_sid=2999b8",
        "config_width": 1080,
        "config_height": 1080
      }
    ],
    "is_video": false,
    "tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZDc1N2U4MGY0ZDk1NGI5YWIwOTQ3MjVjNjc2MjRlOGIyNzg1MTEyNzU2ODU0NTA0NjI2Iiwic2VydmVyX3Rva2VuIjoiMTY5MTIwMDIxNjg0MHwyNzg1MTEyNzU2ODU0NTA0NjI2fDYxMjM4MDQzNzM0fDAwZDQ3YmEzZDBlMDE5ODBiOWVlOWU1ZjkzOThmYTJjODFjNDZkNDM2ODE1OThhMGViOWUwN2MxMzY1MmE1MDAifSwic2lnbmF0dXJlIjoiIn0=",
    "upcoming_event": null,
    "edge_media_to_tagged_user": {
      "edges": [
        {
          "node": {
            "user": {
              "full_name": "Jamie Inklings",
              "followed_by_viewer": false,
              "id": "5404056788",
              "is_verified": false,
              "profile_pic_url": "https://scontent-fra3-2.cdninstagram.com/v/t51.2885-19/232557402_351568756559807_8537389638449143541_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-fra3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=y3_ly5i3CW0AX8CdIop&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfATdN7LNNimPNLm5tx7fXZPLrc5nVUiL0O7aHCJ4Zc-lg&oe=64D3398A&_nc_sid=2999b8",
              "username": "jamie_inklings"
            },
            "x": 0.8196581197,
            "y": 0.8572649573000001
          }
        }
      ]
    },
    "edge_media_to_caption": {
      "edges": [
        {
          "node": {
            "text": "‘Artificial Intelligence’ drops exclusively on Patreon 3/9 !!! \n🤖🤖🤖 - link in bio -\n\n#Elements2 #artificialintelligence #ai"
          }
        }
      ]
    },
    "can_see_insights_as_brand": false,
    "caption_is_edited": true,
    "has_ranked_comments": false,
    "like_and_view_counts_disabled": false,
    "edge_media_to_comment": {
      "count": 332,
      "page_info": {
        "has_next_page": true,
        "end_cursor": ""
      },
      "edges": []
    },
    "comments_disabled": false,
    "commenting_disabled_for_viewer": true,
    "taken_at_timestamp": 1646231334,
    "edge_media_preview_like": {
      "count": 20486,
      "edges": []
    },
    "edge_media_to_sponsor_user": {
      "edges": []
    },
    "is_affiliate": false,
    "is_paid_partnership": false,
    "location": null,
    "viewer_has_liked": false,
    "viewer_has_saved": false,
    "viewer_has_saved_to_collection": false,
    "viewer_in_photo_of_you": false,
    "viewer_can_reshare": true,
    "owner": {
      "id": "24025320",
      "is_verified": true,
      "profile_pic_url": "https://scontent-fra3-2.cdninstagram.com/v/t51.2885-19/281931964_1104802026733984_3930812651141232148_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-fra3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=3Rm88lrHOZEAX9oYMSL&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDbb_C5wjUMhOEvXEmkjmAkp9tZIwhXii3w3bM1-gbSqQ&oe=64D1BFE8&_nc_sid=2999b8",
      "username": "bob",
      "blocked_by_viewer": false,
      "restricted_by_viewer": false,
      "followed_by_viewer": false,
      "full_name": "B.o.B",
      "has_blocked_viewer": false,
      "is_embeds_disabled": false,
      "is_private": false,
      "is_unpublished": false,
      "requested_by_viewer": false,
      "pass_tiering_recommendation": true,
      "edge_owner_to_timeline_media": {
        "count": 367
      },
      "edge_followed_by": {
        "count": 813720
      }
    },
    "is_ad": false,
    "edge_web_media_to_related_media": {
      "edges": []
    },
    "coauthor_producers": [],
    "edge_sidecar_to_children": {
      "edges": [
        {
          "node": {
            "__typename": "GraphImage",
            "id": "2785112752945559018",
            "shortcode": "CamtUrquvXq",
            "dimensions": {
              "height": 1080,
              "width": 1080
            },
            "gating_info": null,
            "fact_check_overall_rating": null,
            "fact_check_information": null,
            "sensitivity_friction_info": null,
            "sharing_friction_info": {
              "should_have_sharing_friction": false,
              "bloks_app_url": null
            },
            "media_overlay_info": null,
            "media_preview": "ACoqmjijaOMbF5GWO0EkAZxz3J71K0EHURpg+wpIo90SMDgqB75BGP8AJpwVQw5JJzgfzo11t8jN9upRuoB0jiUhhgEcFT/hVRrbYBnHTn5a1LxN6gZxhs59se3p+FUDcbB8wDjoO315HUH+dYy5tOve39f5G8U1pdEAQIc8Yz6VEcE5qxO2+PdgICflUc59z7f1qqOlVHuORsxygRrnsKhkJf5xkH+h9DUZCAIT6Lu/l/8AX96sNgjcOPY8gjtjHSm76631MezsQyM5G3dvHbr+RpkcYYkPwB1/Lp/n8alS5KnHzAdMZH6etRTSMw2KNoPU9/fj3/8ArHFNO6NNdhgtwybi3PYYyAO30qqOOKtYIUgcgYxk4yB69vaqgqYppvmKk09jTUZCgDIKjoOc4/DPv6U0xknYNyn0wePr7D171ntK6pwxHToTVYzyHgsxz7mrfci+yNljtYBWJX/Ocf54pk6lfmByh9fX69j9Kx97Z6np60u9uVycHqM8flS2KNJcPnBDv2HQfh0z/n61WHHBqKIkZx/nrUmTVXuTax//2Q==",
            "display_url": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&ig_cache_key=Mjc4NTExMjc1Mjk0NTU1OTAxOA%3D%3D.2-ccb7-5&oh=00_AfBlyfMhY8b2n11-RliOAUQpGfi3ToT3hm-QxG_q3scdMQ&oe=64D35F70&_nc_sid=2999b8",
            "display_resources": [
              {
                "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBYtgQuPccT62MXv-2eH-pSo7vgA0sEq5nx62-hq6Jg-A&oe=64D35F70&_nc_sid=2999b8",
                "config_width": 640,
                "config_height": 640
              },
              {
                "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s750x750_sh0.08&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCVphwIddg9E58tBDqW-PyaNqmsuOWbNKwhZXO4DQHkGw&oe=64D35F70&_nc_sid=2999b8",
                "config_width": 750,
                "config_height": 750
              },
              {
                "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/275029979_327226599369441_8145201474386257088_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=FtmyH5PVTz0AX-v1fzm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBlyfMhY8b2n11-RliOAUQpGfi3ToT3hm-QxG_q3scdMQ&oe=64D35F70&_nc_sid=2999b8",
                "config_width": 1080,
                "config_height": 1080
              }
            ],
            "accessibility_caption": "Photo shared by B.o.B on March 02, 2022 tagging @jamie_inklings.",
            "is_video": false,
            "tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZDc1N2U4MGY0ZDk1NGI5YWIwOTQ3MjVjNjc2MjRlOGIyNzg1MTEyNzUyOTQ1NTU5MDE4Iiwic2VydmVyX3Rva2VuIjoiMTY5MTIwMDIxNjg4MnwyNzg1MTEyNzUyOTQ1NTU5MDE4fDYxMjM4MDQzNzM0fGM3MTMzNjU5ZTdmNmFhMjYxYjBiYWU0M2M4NDlkMzc0NTU4N2I0Y2ViMzBmMTUzZWZkMDdiYWMxOWU5NWNlNzQifSwic2lnbmF0dXJlIjoiIn0=",
            "upcoming_event": null,
            "edge_media_to_tagged_user": {
              "edges": [
                {
                  "node": {
                    "user": {
                      "full_name": "Jamie Inklings",
                      "followed_by_viewer": false,
                      "id": "5404056788",
                      "is_verified": false,
                      "profile_pic_url": "https://scontent-fra3-2.cdninstagram.com/v/t51.2885-19/232557402_351568756559807_8537389638449143541_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-fra3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=y3_ly5i3CW0AX8CdIop&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfATdN7LNNimPNLm5tx7fXZPLrc5nVUiL0O7aHCJ4Zc-lg&oe=64D3398A&_nc_sid=2999b8",
                      "username": "jamie_inklings"
                    },
                    "x": 0.8196581197,
                    "y": 0.8572649573000001
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "__typename": "GraphImage",
            "id": "2785112753029353680",
            "shortcode": "CamtUrvuZDQ",
            "dimensions": {
              "height": 1080,
              "width": 1080
            },
            "gating_info": null,
            "fact_check_overall_rating": null,
            "fact_check_information": null,
            "sensitivity_friction_info": null,
            "sharing_friction_info": {
              "should_have_sharing_friction": false,
              "bloks_app_url": null
            },
            "media_overlay_info": null,
            "media_preview": "ACoqmjijaOMbF5GWO0EkAZxz3J71K0EHURpg+wpIo90SMDgqB75BGP8AJqRIxnOSfaiz1t8jNsz7qAdI4lIYYBHBU/4VUa22AZx05+Wr+rHbEpXg7h047GsyK+IGJAH447H3HFZSUtL2fe2n9fgbQTaHBAhzwR9KiOCc1YnbfHuwEBPyqOc+59v61VHSnHuVI6C3XdEuf7oqYDFMt/8AVLn+6KlHWnW+DTujCnrL7yMqD1GfqKhuY08pvlH3T2HpU5PYVHcD90/+638jXAt16nWcv5jHqc44qdegqrVpeg+legjOR0EL7I04P3RVn9M1y7zSKvDMMY6E1B9ol/vt/wB9H/GqnHnXKYR913OrZgvJwPrgf1qvczp5TfMPukdR6Y7VzLSu/DMWHXBJP86Suf2VupupXJhCSu7jH1Gfyzn86kXoPpUUQzn/AD61Jmt0KTuf/9k=",
            "display_url": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/274948796_470579644782501_87791228443588392_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=4hYlyxKreZAAX-cBJ_Y&edm=AP_V10EBAAAA&ccb=7-5&ig_cache_key=Mjc4NTExMjc1MzAyOTM1MzY4MA%3D%3D.2-ccb7-5&oh=00_AfAoiVUE62OIT6RL5kU2mGF6VoMqICyAuvX3oMle5D_l7Q&oe=64D1D3D9&_nc_sid=2999b8",
            "display_resources": [
              {
                "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/274948796_470579644782501_87791228443588392_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=4hYlyxKreZAAX-cBJ_Y&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBFmHs90PWBLTDESQdOgbtOzjJ4tKUbA2YosVpn9ZRFeQ&oe=64D1D3D9&_nc_sid=2999b8",
                "config_width": 640,
                "config_height": 640
              },
              {
                "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/274948796_470579644782501_87791228443588392_n.jpg?stp=dst-jpg_e35_s750x750_sh0.08&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=4hYlyxKreZAAX-cBJ_Y&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCqTGat0zc6tyObqsXyiGuHHXewtbKku81aueSxqCRH3Q&oe=64D1D3D9&_nc_sid=2999b8",
                "config_width": 750,
                "config_height": 750
              },
              {
                "src": "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/274948796_470579644782501_87791228443588392_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=4hYlyxKreZAAX-cBJ_Y&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAoiVUE62OIT6RL5kU2mGF6VoMqICyAuvX3oMle5D_l7Q&oe=64D1D3D9&_nc_sid=2999b8",
                "config_width": 1080,
                "config_height": 1080
              }
            ],
            "accessibility_caption": "Photo by B.o.B on March 02, 2022.",
            "is_video": false,
            "tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZDc1N2U4MGY0ZDk1NGI5YWIwOTQ3MjVjNjc2MjRlOGIyNzg1MTEyNzUzMDI5MzUzNjgwIiwic2VydmVyX3Rva2VuIjoiMTY5MTIwMDIxNjg4MnwyNzg1MTEyNzUzMDI5MzUzNjgwfDYxMjM4MDQzNzM0fDI1YjZjMGNiNGNhMzA0N2ZhMjcxNjE1M2Y3N2NmN2Y5MmIyNDZmM2U4M2UyMGFlOTI3MzY4ODQ5NGMwN2Q2MjIifSwic2lnbmF0dXJlIjoiIn0=",
            "upcoming_event": null,
            "edge_media_to_tagged_user": {
              "edges": []
            }
          }
        }
      ]
    },
    "edge_related_profiles": {
      "edges": []
    },
    "unrelated_data": {
      "retry": 4,
      "id_acc": "998425",
      "proxy_info": "BLRS 3",
      "time_gen": 1.06
    }
  });

  const [profilePic, setProfilePic] = useState();

  // Function to fetch profile picture using the API
  const fetchProfilePic = async () => {
    const options = {
      method: 'GET',
      url: 'https://cors-proxy4.p.rapidapi.com/',
      params: {
        url: post?.display_url + '?dont-block-me'
      },
      headers: {
        'X-RapidAPI-Key': '2f813d12demsh03b080f73d09179p1d72b3jsn6704c5a7f22a',
        'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
      },
      responseType: 'blob', // Set the response type to 'blob' to get the image data as a blob
    };

    try {
      const response = await axios.request(options);

      // Convert the blob data to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch the post data using the shortcode stored in localStorage
  // useEffect(() => {
  //   fetchPostData(localStorage.getItem('shortCode'), setPost, setIsLoading);
  // }, []);

  useEffect(() => {
    if (isLoading) return;
    fetchProfilePic();
  }, [post])

  return (
    <Flex flexDir={'column'} justify={'center'} align='center' w='100%' h='80vh' bg={colors.primary}>
      <Heading mb='5' color={colors.textPrimary}>Confirm Post</Heading>
      {isLoading ? <Spinner /> : <Card size='sm' w='fit-content' bg='transparent'>
        <Flex gap='5'>
          <Image
            src={profilePic}
            alt={post}
            borderRadius='lg'
            w='175px'
            h='175px'
            objectFit='cover'
            fallbackSrc={loading}
          />

        </Flex>
        <Flex align={'center'} justify={'center'} w='100%' gap='3' pos='absolute' bottom='-20px'>
          <IconButton icon={<CheckIcon />} bg='green.400' h='50px' w='50px' onClick={() => { confirmFinal('0', setPage,) }} />
          <IconButton icon={<CloseIcon />} bg='red.400' h='50px' w='50px' onClick={() => { confirmFinal('1', setPage) }} />
        </Flex>
      </Card>}
    </Flex>
  )
}