import { ImageSourcePropType } from "react-native";

interface Images {
  homeSelected: ImageSourcePropType;
  homeUnselected: ImageSourcePropType;
  sessionsSelected: ImageSourcePropType;
  sessionsUnselected: ImageSourcePropType;
  commentsSelected: ImageSourcePropType;
  commentsUnselected: ImageSourcePropType;
  communitySelected: ImageSourcePropType;
  communityUnselected: ImageSourcePropType;
  selection: ImageSourcePropType;
  profilePicture: ImageSourcePropType;
  notification: ImageSourcePropType;
  happy: ImageSourcePropType;
  calm: ImageSourcePropType;
  manic: ImageSourcePropType;
  relaxed: ImageSourcePropType;
  angry: ImageSourcePropType;
  calendar: ImageSourcePropType;
  meetup: ImageSourcePropType;
  weird: ImageSourcePropType;
  journal: ImageSourcePropType;
  library: ImageSourcePropType;
  quote: ImageSourcePropType;
  play: ImageSourcePropType;
  updown: ImageSourcePropType;
  downarrow: ImageSourcePropType;
  human1: ImageSourcePropType;
  human2: ImageSourcePropType;
  human3: ImageSourcePropType;
  human4: ImageSourcePropType;
  human5: ImageSourcePropType;
  human6: ImageSourcePropType;
  human7: ImageSourcePropType;
  whitecalendar: ImageSourcePropType;
  whiteclock: ImageSourcePropType;
  thumbactive: ImageSourcePropType;
  thumbinactive: ImageSourcePropType;
  comment: ImageSourcePropType;
  share: ImageSourcePropType;
  pencil: ImageSourcePropType;
  mona: ImageSourcePropType;
}

interface IconInfoProps {
  image: any;
  text: string;
}

interface RescheduleComponentProps {
  image: ImageSourcePropType;
  name: string;
  title: string;
  date: string;
  time: string;
  button1text: string;
  button2text: string;
  bgcolor: string;
  border: boolean;
}

interface CommentComponentProps {
  name: string;
  recency: string;
  comment: string;
  active: boolean;
  likeCount: string;
  commentCount: string;
  image: ImageSourcePropType;
}
