using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Chapter : MonoBehaviour {

	//ref for components
	[SerializeField] private Image image;
	[SerializeField] private TMP_Text textField;
	[SerializeField] private Button nextButton;

	//ref for typing out the text.
	[SerializeField] private StoryData storyData;
	[SerializeField] private StoryManager storyManager;
	[SerializeField] private TextWriter textWriter;
	[SerializeField] private float timePerCharacter;

	//ref for fading in pic
	[SerializeField] private PictureHandler pictureHandler;
	[SerializeField] private float timePicFade;

	private int storyIndex;

	private bool firstClick;

	void Start() {
		storyIndex = 0;

		textField.gameObject.SetActive(false);
		image.gameObject.SetActive(false);
	}

	private void Awake() {
		firstClick = true;
	}
	
	public void ShowNext() {
		if (firstClick) {
			textField.gameObject.SetActive(true);
			image.gameObject.SetActive(true);

			pictureHandler.RecievePicture(image, storyData.ActivePicture, timePicFade);
			textWriter.RecieveText(textField, storyData.GetStoryText(storyIndex), timePerCharacter, nextButton);
			
			storyIndex++;

			image.sprite = storyData.ActivePicture;
			firstClick = false;
			return;
		}

		if (storyIndex >= storyData.StoryLength) {
			GoToNextChapter();
			textField.gameObject.SetActive(false);
			nextButton.gameObject.SetActive(false);
		} else {
			Debug.Log("Just about to show the story text with index: " + storyIndex);
			textWriter.RecieveText(textField, storyData.GetStoryText(storyIndex), timePerCharacter, nextButton);
			storyIndex++;
		}
	}

	private void GoToNextChapter() {
		storyManager.NextChapter();
	}

	private void HandleOnActivateButton() {
		nextButton.gameObject.SetActive(true);
	}
}