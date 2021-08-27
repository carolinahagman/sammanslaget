using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Chapter : MonoBehaviour {

	//ref for components
	[SerializeField] private Image inActiveImage;
	[SerializeField] private Image activeImage;
	[SerializeField] private TMP_Text textField;
	[SerializeField] private Button nextButton;

	//ref for typing out the text.
	[SerializeField] private StoryData storyData;
	[SerializeField] private StoryManager storyManager;
	[SerializeField] private TextWriter textWriter;
	[SerializeField] private float timePerCharacter;

	//ref for fading in & out pic
	[SerializeField] private PictureHandler pictureShower;
	[SerializeField] private PictureHandler pictureFader;

	private int storyIndex;

	private bool firstClick;

	void Start() {
		storyIndex = 0;

		textField.gameObject.SetActive(false);
		inActiveImage.gameObject.SetActive(false);
		activeImage.gameObject.SetActive(false);
	}

	private void Awake() {
		firstClick = true;
	}
	
	public void ShowNext() {
		if (firstClick) {
			textField.gameObject.SetActive(true);
			activeImage.gameObject.SetActive(true);

			pictureShower.FadeInImage(activeImage, storyData.ActivePicture);
			textWriter.RecieveText(textField, storyData.GetStoryText(storyIndex), timePerCharacter, nextButton);
			
			storyIndex++;

			inActiveImage.sprite = storyData.InactivePicture;
			firstClick = false;
			return;
		}

		if (storyIndex >= storyData.StoryLength) {
			inActiveImage.gameObject.SetActive(true);
			pictureFader.FadeOutImage(activeImage);
			pictureShower.FadeInImage(inActiveImage, storyData.InactivePicture);

			GoToNextChapter();
			textField.gameObject.SetActive(false);
			nextButton.gameObject.SetActive(false);
		} else {
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