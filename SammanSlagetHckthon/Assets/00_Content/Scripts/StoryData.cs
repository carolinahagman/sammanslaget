using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "StoryData", menuName = "StoryData")]
public class StoryData : ScriptableObject {
	
	//Check through this, how to redo it? Want list of all in one data no?
	//Want Storyhandler to have array of stories instead no? Going from one to the next?
	//Going to other screen on end yes?

	[TextArea(10,50)]
	[SerializeField] private string[] storyTexts;
	public int StoryLength { get { return storyTexts.Length; } }

	public string GetStoryText(int index) {
		return storyTexts[index];
	}

	[SerializeField] private Sprite activePicture;
	public Sprite ActivePicture { get { return activePicture; } }

	[SerializeField] private Sprite inActivePicture;
	public Sprite InactivePicture { get { return inActivePicture; } }
}
