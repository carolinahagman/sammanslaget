using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class StoryGroup : MonoBehaviour {

	//var for ref components
	[SerializeField] private Button[] buttons;
	[SerializeField] private Image mainImage;
	[SerializeField] private TMP_Text textField;

	//ref for scriptable object
	[SerializeField] private StoryData storyData;

	//ref for state
	private bool isActive;
	public bool GetIsActive { get { return isActive; } }

	void Start() {

		isActive = false;
		mainImage.sprite = storyData.InActivePicture;
		textField.text = "";
	}

	public void OnActivateStory() {

		isActive = true;

		mainImage.sprite = storyData.ActivePicture;
		textField.text = storyData.StoryText;

		//TODO: Later on, will want to shift camera here aswell.
		//TODO: Add "inactive" function here as well, that switches it between two stages.
	}
}
