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

	//ref for state active y/n
	private bool isActive;
	public bool GetIsActive { get { return isActive; } }

	void Start() {
		isActive = false;
		mainImage.sprite = storyData.InActivePicture;
		textField.text = "";
	}

	public void OnClick() {
		if (!isActive) { OnActivateStory(); }
		else { EndStory(); }
	}

	private void OnActivateStory() {
		isActive = true;
		mainImage.sprite = storyData.ActivePicture;
		textField.text = storyData.StoryText;
	}

	private void EndStory() {
		isActive = false;
		mainImage.sprite = storyData.InActivePicture;
		textField.text = "";
	}
}
