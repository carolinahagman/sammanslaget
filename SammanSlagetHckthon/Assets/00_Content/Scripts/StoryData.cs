using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "StoryData", menuName = "StoryData")]
public class StoryData : ScriptableObject {

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
