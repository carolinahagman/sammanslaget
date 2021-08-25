using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "StoryData", menuName = "StoryData")]
public class StoryData : ScriptableObject {

	[SerializeField] private string storyTitle;
	public string StoryTitle { get { return storyTitle; } }
	
	[TextArea(50,100)]
	[SerializeField] private string storyText;
	public string StoryText { get { return storyText; } }

	[SerializeField] private Sprite activePicture;
	public Sprite ActivePicture { get { return activePicture; } }
	
	[SerializeField] private Sprite inActivePicture;
	public Sprite InActivePicture { get { return inActivePicture; } }

}
